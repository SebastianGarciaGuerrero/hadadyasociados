import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Equipo from "./pages/Equipo";
import Pagos from "./pages/Pagos";
import Calculadora from "./pages/Calculadora";
import Links from "./pages/Links";
import Contacto from "./pages/Contacto";
import NoEncontrada from "./pages/NoEncontrada";

// Rutas del sitio. Las usa el navegador (main.tsx) y también el
// pre-renderizado del build (entry-server.tsx), que genera un .html por ruta.
export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="pagos" element={<Pagos />} />
        <Route path="calculadora" element={<Calculadora />} />
        <Route path="links" element={<Links />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}
