// En el sitio publicado las imágenes se sirven en WebP (las genera
// scripts/optimizar-imagenes.mjs). En desarrollo se usan los originales.
export function img(ruta: string) {
  return import.meta.env.PROD ? ruta.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2") : ruta;
}
