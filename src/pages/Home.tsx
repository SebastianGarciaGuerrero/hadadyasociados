import { Link } from "react-router-dom";
import { servicios, clientes } from "../data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#8a97a0,#5c6870)] px-7 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs tracking-[0.15em] text-[#e5e5e5]">EMPRESA DE COBRANZAS</div>
          <h1 className="max-w-md font-serif text-3xl leading-snug md:text-4xl">
            Compromiso Hadad &amp; Asociados
          </h1>
          <p className="mt-4 max-w-md text-sm text-[#dddddd] md:text-base">
            Cobranza extrajudicial y judicial para personas naturales y jurídicas.
          </p>
        </div>
      </section>

      {/* Resumen de servicios */}
      <section className="border-b border-[#ebeaea] px-7 py-12 md:px-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 sm:flex-row sm:gap-6">
          {servicios.map((s) => (
            <Link key={s.title} to="/servicios" className="group flex-1 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6f6f6] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <s.icon strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <div className="text-sm text-ink group-hover:text-brand">{s.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section className="px-7 py-12 text-center md:px-12">
        <div className="mb-8 text-[11px] tracking-[0.15em] text-subtle">NUESTROS PRINCIPALES CLIENTES</div>
        <div className="mx-auto grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {clientes.map((c) => (
            <div key={c.nombre} className="flex items-center justify-center">
              <img
                src={c.logo}
                alt={c.nombre}
                title={c.nombre}
                className="max-h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
