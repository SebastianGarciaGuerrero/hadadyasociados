// Después de `vite build` (cliente) y `vite build --ssr` (servidor):
//  1. Genera el HTML completo de cada página de src/seo.json, con su <title>,
//     descripción, canonical y Open Graph. Así buscadores, analizadores SEO y
//     vistas previas (WhatsApp, Facebook, LinkedIn) ven el contenido real sin
//     ejecutar JavaScript, y la página se dibuja antes.
//  2. Genera 404.html (página no encontrada, marcada como no indexable).
//  3. Genera sitemap.xml con la fecha de esta publicación.
//
// Cada página queda en su carpeta (dist/servicios/index.html) y su dirección
// oficial es /servicios/ (con barra final): así funciona con la configuración
// por defecto de cualquier servidor, sin depender de reglas del .htaccess.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const seo = JSON.parse(readFileSync(new URL("../src/seo.json", import.meta.url), "utf8"));
const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);
const base = readFileSync("dist/index.html", "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Falta <meta ${attr}="${key}"> en index.html`);
  return html.replace(re, `$1${esc(value)}$2`);
}

function pagina(ruta, p, { indexable = true } = {}) {
  const url = seo.sitio + (ruta === "/" ? "/" : `${ruta}/`);
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(p.title)}</title>`);
  html = setMeta(html, "name", "description", p.description);
  html = setMeta(html, "name", "robots", indexable ? "index, follow" : "noindex, follow");
  html = setMeta(html, "property", "og:title", p.title);
  html = setMeta(html, "property", "og:description", p.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", p.title);
  html = setMeta(html, "name", "twitter:description", p.description);
  html = indexable
    ? html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    : html.replace(/\s*<link rel="canonical"[^>]*>/, "");

  const contenido = render(ruta);
  if (!html.includes('<div id="root"></div>')) throw new Error("No se encontró <div id=\"root\"></div>");
  return html.replace('<div id="root"></div>', `<div id="root">${contenido}</div>`);
}

for (const [ruta, p] of Object.entries(seo.paginas)) {
  const carpeta = ruta === "/" ? "dist" : `dist${ruta}`;
  mkdirSync(carpeta, { recursive: true });
  const archivo = `${carpeta}/index.html`;
  writeFileSync(archivo, pagina(ruta, p));
  console.log(`  ✓ ${archivo}`);
}

writeFileSync("dist/404.html", pagina("/404", seo.noEncontrada, { indexable: false }));
console.log("  ✓ dist/404.html");

const hoy = new Date().toISOString().slice(0, 10);
const prioridad = { "/": "1.0", "/pagos": "0.9", "/servicios": "0.8", "/nosotros": "0.8", "/calculadora": "0.8" };
const urls = Object.keys(seo.paginas)
  .map((ruta) => {
    const loc = seo.sitio + (ruta === "/" ? "/" : `${ruta}/`);
    return `  <url><loc>${loc}</loc><lastmod>${hoy}</lastmod><priority>${prioridad[ruta] ?? "0.6"}</priority></url>`;
  })
  .join("\n");
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("  ✓ dist/sitemap.xml");

rmSync("dist-ssr", { recursive: true, force: true });
