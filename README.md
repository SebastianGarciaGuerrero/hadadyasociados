# Hadad & Asociados — Sitio web

Sitio web de **Hadad & Asociados**, empresa de cobranzas y estudio jurídico de
Valparaíso, Chile: cobranza extrajudicial y judicial, y asesoría legal y financiera.

Publicado en **https://www.hadadyasociados.cl** (hosting AgmaHost, detrás de Cloudflare).

## Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio: portada, servicios y carrusel de clientes |
| `/nosotros` | Quiénes somos |
| `/servicios` | Áreas de trabajo (carrusel) |
| `/equipo` | Socios y staff |
| `/pagos` | Paga tu cuenta: datos de transferencia por clínica |
| `/calculadora` | **Calculadora Judicial**: honorarios 3-6-9, abonos y acuerdos de pago |
| `/links` | Links de interés |
| `/contacto` | Dirección, teléfono, correo y mapa |

## Tecnologías

Vite + React 18 + TypeScript, Tailwind CSS, React Router y lucide-react (íconos).

## Dónde se edita cada cosa

```
src/
├── App.tsx              menú lateral / menú móvil y pie de página
├── rutas.tsx            rutas (las usa el navegador y el pre-renderizado)
├── data.ts              servicios, clientes, links, contacto y cuentas de pago
├── seo.json             título y descripción de cada página (Google / WhatsApp)
├── pages/               una página por archivo (Equipo.tsx tiene los nombres y cargos)
└── calculadora/         Calculadora Judicial (ver abajo)
public/
├── img/                 imágenes en JPG/PNG (ver LEER-fotos.txt)
├── .htaccess            redirecciones, URLs limpias, 404, seguridad y caché (AgmaHost)
└── robots.txt, favicon, og-image.jpg
scripts/
├── prerender.mjs        genera el HTML completo de cada página, la 404 y el sitemap
└── optimizar-imagenes.mjs  convierte las imágenes a WebP del tamaño justo
```

### Cómo se publica cada página

`npm run build` genera en `dist/` un archivo HTML **con el contenido ya escrito** por cada
página (`servicios.html`, `equipo.html`…). Así Google, los analizadores SEO y las vistas
previas de WhatsApp ven el texto sin ejecutar JavaScript, y el sitio se dibuja antes.
El `.htaccess` las sirve en direcciones limpias (`/servicios`) y redirige todo a
`https://www.hadadyasociados.cl` (con www y https).

### Calculadora Judicial

Los módulos de `src/calculadora/` (Honorarios 3-6-9, Cálculo de abono y Acuerdo de pago)
vienen del repositorio cobra369. Si se corrige un cálculo allá, hay que copiar el archivo
correspondiente acá. `src/calculadora/calculadora.css` adapta sus estilos a los colores del
sitio y los limita a la sección `.calc369` para que no afecten al resto de las páginas.

## Cómo correrlo en local

Requiere [Node.js](https://nodejs.org/) 20 o superior.

```bash
npm install      # solo la primera vez
npm run dev      # → http://localhost:5173
npm run build    # versión de producción en dist/
npm run preview  # sirve dist/ localmente
```

> En **PowerShell**, si aparece un error de *execution policy*, usa `npm.cmd run dev`.

## Publicación automática

Cada `git push` a la rama **main** compila el sitio y lo sube por FTP a `public_html`
de AgmaHost (ver `.github/workflows/deploy.yml`). Ya no hay que subir archivos a mano.

Configuración inicial (una vez), en GitHub → **Settings → Secrets and variables → Actions**:

| Secreto | Valor |
|---|---|
| `FTP_SERVER` | servidor FTP que muestra cPanel (no `ftp.hadadyasociados.cl`, que pasa por Cloudflare) |
| `FTP_USERNAME` | usuario de la cuenta FTP |
| `FTP_PASSWORD` | contraseña de esa cuenta |

Opcionales para Cloudflare (pestaña *Secrets*): `CLOUDFLARE_ZONE_ID` y `CLOUDFLARE_API_TOKEN`
(token con permiso *Zone → Cache Purge*). Si existen, cada publicación limpia el caché de
Cloudflare, lo que permite que Cloudflare guarde las páginas y el sitio cargue más rápido.

Opcionales (pestaña *Variables*): `FTP_SERVER_DIR` (por defecto `public_html/`; usar `./`
si la cuenta FTP entra directo a `public_html`) y `FTP_PROTOCOL` (`ftps` por defecto, o `ftp`).

El progreso de cada publicación se ve en la pestaña **Actions** del repositorio.
