// Título, descripción y URL canónica de cada página. Los mismos datos
// (src/seo.json) los usa scripts/prerender.mjs para generar un index.html
// por ruta, así Google y WhatsApp ven el título correcto sin ejecutar JS.
import seo from "./seo.json";

type Pagina = { title: string; description: string };
const paginas: Record<string, Pagina> = seo.paginas;
const noEncontrada: Pagina = seo.noEncontrada;

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function aplicarSeo(pathname: string) {
  const ruta = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const existe = ruta in paginas;
  const p = existe ? paginas[ruta] : noEncontrada;
  const url = seo.sitio + (ruta === "/" ? "/" : ruta);

  // Una URL que no existe no debe aparecer en Google
  setMeta("name", "robots", existe ? "index, follow" : "noindex, follow");

  document.title = p.title;
  setMeta("name", "description", p.description);
  setMeta("property", "og:title", p.title);
  setMeta("property", "og:description", p.description);
  setMeta("property", "og:url", url);
  setMeta("name", "twitter:title", p.title);
  setMeta("name", "twitter:description", p.description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}
