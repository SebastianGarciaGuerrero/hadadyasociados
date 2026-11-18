import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { contacto } from "./data";
import { aplicarSeo } from "./seo";

const nav = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nuestro Equipo", to: "/equipo" },
  { label: "Paga tu cuenta", to: "/pagos" },
  { label: "Calculadora Judicial", to: "/calculadora" },
  { label: "Links de Interés", to: "/links" },
  { label: "Contacto", to: "/contacto" },
];

export default function App() {
  const [abierto, setAbierto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    aplicarSeo(pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Menú lateral (escritorio) / barra superior con hamburguesa (celular) */}
      <aside className="border-b border-[#e5e5e5] bg-white md:sticky md:top-0 md:flex md:h-screen md:w-56 md:flex-col md:gap-6 md:border-b-0 md:border-r md:px-5 md:py-6">
        <div className="flex items-center justify-between px-5 py-4 md:block md:border-b md:border-[#e5e5e5] md:p-0 md:pb-4">
          <NavLink
            to="/"
            onClick={() => setAbierto(false)}
            aria-label="Ir a Inicio"
            className="block cursor-pointer md:w-full"
          >
            <img
              src="/img/logo.png"
              alt="Hadad & Asociados — Asesoría Legal y Financiera"
              className="w-32 md:mx-auto md:w-44"
            />
          </NavLink>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-brand md:hidden"
          >
            {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav
          className={`${
            abierto ? "flex" : "hidden"
          } flex-col gap-1 border-t border-[#e5e5e5] px-5 pb-4 pt-2 font-serif text-sm md:flex md:gap-4 md:border-t-0 md:p-0 md:text-[13px]`}
        >
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              onClick={() => setAbierto(false)}
              className={({ isActive }) =>
                `py-1.5 text-center uppercase tracking-wide transition-colors hover:text-accent md:py-0 ${
                  isActive ? "font-semibold text-accent" : "text-ink"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="mt-3 border-t border-[#e5e5e5] pt-3 text-center text-[11px] leading-relaxed text-subtle md:hidden">
            {contacto.telefono}
            <br />
            Valparaíso
          </div>
        </nav>

        <div className="hidden text-center text-[11px] leading-relaxed text-subtle md:mt-auto md:block">
          {contacto.telefono}
          <br />
          Valparaíso
        </div>
      </aside>

      {/* Contenido de cada página */}
      <main className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <footer className="bg-[#282a2b] px-4 py-4 text-center text-[#8C8989]">
          <div className="text-[11px]">{contacto.direccion}</div>
          <div className="mt-1.5 text-[10px] text-[#6f6c6c]">
            Desarrollado por{" "}
            <a
              href="https://sebastiangarcia.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#a8a5a5] transition-colors hover:text-white"
            >
              sebastiangarcia.cl
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
