// Después de `vite build`: crea dist/<ruta>/index.html para cada página de
// src/seo.json, con su <title>, descripción, canonical y etiquetas Open Graph.
// Así Google y las vistas previas de WhatsApp/Facebook muestran el título
// correcto de cada página sin tener que ejecutar JavaScript.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const seo = JSON.parse(readFileSync(new URL("../src/seo.json", import.meta.url), "utf8"));
const base = readFileSync("dist/index.html", "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setAttr(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Falta <meta ${attr}="${key}"> en index.html`);
  return html.replace(re, `$1${esc(value)}$2`);
}

for (const [ruta, p] of Object.entries(seo.paginas)) {
  const url = seo.sitio + (ruta === "/" ? "/" : ruta);
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(p.title)}</title>`);
  html = setAttr(html, "name", "description", p.description);
  html = setAttr(html, "property", "og:title", p.title);
  html = setAttr(html, "property", "og:description", p.description);
  html = setAttr(html, "property", "og:url", url);
  html = setAttr(html, "name", "twitter:title", p.title);
  html = setAttr(html, "name", "twitter:description", p.description);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  const dir = ruta === "/" ? "dist" : `dist${ruta}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
  console.log(`  ✓ ${dir}/index.html`);
}
