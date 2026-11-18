import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Equipo from "./pages/Equipo";
import Pagos from "./pages/Pagos";
import Links from "./pages/Links";
import Contacto from "./pages/Contacto";
import "./index.css";

// La calculadora se descarga solo al entrar a esa página (el resto del sitio
// no carga su código).
const Calculadora = lazy(() => import("./pages/Calculadora"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="equipo" element={<Equipo />} />
          <Route path="pagos" element={<Pagos />} />
          <Route
            path="calculadora"
            element={
              <Suspense fallback={<div className="min-h-[60vh]" />}>
                <Calculadora />
              </Suspense>
            }
          />
          <Route path="links" element={<Links />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
