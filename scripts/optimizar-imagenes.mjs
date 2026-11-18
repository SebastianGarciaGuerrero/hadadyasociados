// Después del build: convierte las imágenes de dist/img a WebP (mucho más
// livianas) y las achica al tamaño en que realmente se muestran. Las fotos
// originales se pueden seguir subiendo en JPG/PNG a public/img; el sitio
// publicado usa las versiones .webp (ver src/img.ts).
import { readdirSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import sharp from "sharp";

const RAIZ = "dist/img";
// Ancho máximo (px) según la carpeta o archivo: el doble de lo que se ve en
// pantalla, para que se vea nítido en celulares y pantallas retina.
const ANCHO_MAX = [
  [/^logo\.png$/, 352],
  [/^equipo\//, 600],
  [/^clientes\//, 480],
  [/./, 1600],
];

function* archivos(dir) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) yield* archivos(ruta);
    else if (/\.(jpe?g|png)$/i.test(nombre)) yield ruta;
  }
}

let antes = 0;
let despues = 0;
for (const ruta of archivos(RAIZ)) {
  const rel = relative(RAIZ, ruta).replace(/\\/g, "/");
  const ancho = ANCHO_MAX.find(([re]) => re.test(rel))[1];
  const destino = ruta.replace(/\.(jpe?g|png)$/i, ".webp");
  const info = await sharp(ruta)
    .rotate()
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(destino);
  antes += statSync(ruta).size;
  despues += info.size;
  rmSync(ruta);
}
console.log(`  ✓ imágenes a WebP: ${(antes / 1024).toFixed(0)} KB → ${(despues / 1024).toFixed(0)} KB`);
