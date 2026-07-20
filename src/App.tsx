import { NavLink, Outlet } from "react-router-dom";
import { contacto } from "./data";

const nav = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nuestro Equipo", to: "/equipo" },
  { label: "Contacto", to: "/contacto" },
];

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Menú lateral */}
      <aside className="flex flex-col gap-6 border-b border-[#e5e5e5] bg-white px-5 py-6 md:sticky md:top-0 md:h-screen md:w-56 md:border-b-0 md:border-r">
        <NavLink to="/" className="border-b border-[#e5e5e5] pb-4">
          <img src="/img/logo.png" alt="Hadad & Asociados — Asesoría Legal y Financiera" className="mx-auto w-28" />
        </NavLink>

        <nav className="flex flex-row flex-wrap gap-3 font-serif text-[13px] text-ink md:flex-col md:gap-3.5">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `border-l-[3px] pl-2 transition-colors hover:text-accent ${
                  isActive ? "border-accent text-accent" : "border-transparent hover:border-accent"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="text-[11px] leading-relaxed text-subtle md:mt-auto">
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
        <footer className="bg-[#282a2b] px-4 py-3 text-center text-[11px] text-[#8C8989]">
          {contacto.direccion}
        </footer>
      </main>
    </div>
  );
}
