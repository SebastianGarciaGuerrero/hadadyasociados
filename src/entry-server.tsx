// Solo se usa en el build (scripts/prerender.mjs): genera el HTML de cada
// página para que buscadores y vistas previas vean el contenido sin JavaScript.
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Rutas from "./rutas";

export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Rutas />
      </StaticRouter>
    </React.StrictMode>
  );
}
