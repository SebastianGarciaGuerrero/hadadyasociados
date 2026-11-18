import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Rutas from "./rutas";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  </React.StrictMode>
);

// En producción cada página ya viene con su HTML pre-renderizado: React solo
// lo "activa" (hydrate). En desarrollo (npm run dev) el HTML viene vacío.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
