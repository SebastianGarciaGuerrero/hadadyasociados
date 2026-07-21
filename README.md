# Hadad & Asociados — Sitio web

Sitio web corporativo de **Hadad & Asociados**, empresa de cobranzas y estudio jurídico
ubicado en Valparaíso, Chile. Se dedica a la **cobranza extrajudicial y judicial** y a la
asesoría legal para personas naturales y jurídicas.

## ¿Qué es este proyecto?

Es la **recreación del antiguo sitio de la empresa**, que originalmente estaba hecho en
**WordPress** (tema Avada). El objetivo es reconstruirlo lo más parecido posible a como era
antes, pero sobre una base moderna, más liviana y fácil de mantener, sin depender de WordPress
ni de sus plugins.

Todo el contenido y las imágenes (logo, logos de clientes, fotos del equipo) fueron
**recuperados desde un respaldo del `wp-content`** del sitio original.

## Tecnologías

- [Vite](https://vitejs.dev/) — empaquetador y servidor de desarrollo
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — estilos
- [React Router](https://reactrouter.com/) — navegación entre páginas
- [lucide-react](https://lucide.dev/) — íconos

## Estructura

El sitio es **multipágina**, con un menú lateral fijo. Las páginas son:

- **Inicio** (`/`) — presentación, resumen de servicios y logos de clientes
- **Servicios** (`/servicios`) — cobranza extrajudicial, judicial y asesoría legal
- **Nuestro Equipo** (`/equipo`) — integrantes del estudio
- **Contacto** (`/contacto`) — dirección, teléfono y ubicación

```
hadadyasociados/
├── public/img/          # imágenes (logo, clientes/, equipo/, fotos)
├── src/
│   ├── App.tsx          # layout con el menú lateral
│   ├── main.tsx         # rutas (React Router)
│   ├── data.ts          # datos compartidos (servicios, clientes, contacto)
│   └── pages/           # Home, Servicios, Equipo, Contacto
├── tailwind.config.js   # paleta y tipografías
└── vercel.json          # config de deploy (rewrites para el ruteo)
```

### Diseño

- **Colores**: granate `#781010` (marca) con acento rojo `#f05858`, sobre fondo blanco.
- **Tipografías**: *Antic Slab* (títulos) e *Alef* (cuerpo).

## Cómo correrlo en local

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
# → abre http://localhost:5173
```

Otros comandos:

```bash
npm run build     # genera la versión optimizada para producción (carpeta dist/)
npm run preview   # sirve la versión de producción localmente
```

> En **PowerShell**, si aparece un error de *execution policy*, usa `npm.cmd run dev`
> o ejecuta una vez `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

## Pendientes

- [ ] Completar **nombres y cargos** reales del equipo (se obtienen del respaldo `.sql` de
      la base de datos del WordPress antiguo; las etiquetas actuales son provisorias).
- [ ] **Optimizar/redimensionar** las fotos del equipo (algunas son de alta resolución).
- [ ] Incorporar (opcional) la imagen de portada y las imágenes de servicios del sitio original.
- [ ] **Desplegar** en producción (GitHub + Vercel) para tener una URL pública.

## Despliegue

Preparado para desplegarse en [Vercel](https://vercel.com/) (incluye `vercel.json` con las
reglas de *rewrite* necesarias para que el ruteo de una SPA funcione al recargar la página).
