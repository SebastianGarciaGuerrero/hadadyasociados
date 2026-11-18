import { Link } from "react-router-dom";
import { servicios, clientes } from "../data";
import { img } from "../img";

export default function Home() {
  return (
    <>
      {/* Hero con imagen de fondo */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden px-7 py-16 text-white md:min-h-[560px] md:px-12">
        <img
          src={img("/img/hero.jpg")}
          alt=""
          aria-hidden="true"
          width={1500}
          height={730}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,32,33,0.72)_0%,rgba(40,42,43,0.42)_45%,rgba(40,42,43,0.12)_100%)]" />
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="mb-3 text-xs tracking-[0.15em] text-[#e5e5e5]">EMPRESA DE COBRANZAS · VALPARAÍSO</div>
          <h1 className="max-w-xl font-serif text-3xl leading-tight drop-shadow md:text-[2.9rem]">
            Especialistas en cobranza y recuperación de créditos
          </h1>
          <p className="mt-4 max-w-md text-sm text-[#eeeeee] drop-shadow md:text-base">
            Más de 30 años de experiencia en cobranza extrajudicial y judicial para personas naturales y jurídicas.
          </p>
          <Link
            to="/pagos/"
            className="mt-7 inline-block rounded-sm bg-brand px-6 py-3 text-sm font-medium uppercase tracking-wider text-white shadow transition-colors hover:bg-[#5f0d0d]"
          >
            Paga tu cuenta
          </Link>
        </div>
      </section>

      {/* Resumen de servicios */}
      <section className="border-b border-[#ebeaea] px-7 py-12 md:px-12">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {servicios.map((s) => (
            <Link key={s.title} to="/servicios/" className="group text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f6f6f6] text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <s.icon strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <div className="text-sm text-ink group-hover:text-brand">{s.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clientes: carrusel continuo (la lista va duplicada para que el loop no tenga saltos) */}
      <section className="py-12 text-center">
        <div className="mb-8 text-[11px] tracking-[0.15em] text-subtle">NUESTROS PRINCIPALES CLIENTES</div>
        <div className="group relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-16">
            {[...clientes, ...clientes].map((c, i) => (
              <img
                key={i}
                src={img(c.logo)}
                width={c.ancho}
                height={100}
                loading="lazy"
                decoding="async"
                alt={c.nombre}
                title={c.nombre}
                aria-hidden={i >= clientes.length}
                className="h-12 w-auto shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
