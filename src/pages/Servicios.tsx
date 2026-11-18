import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { servicios } from "../data";

export default function Servicios() {
  const total = servicios.length;
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const mover = useCallback((paso: number) => setActual((i) => (i + paso + total) % total), [total]);

  // Avanza solo cada 9 segundos, salvo que el mouse esté encima
  useEffect(() => {
    if (pausado) return;
    const t = setInterval(() => setActual((i) => (i + 1) % total), 9000);
    return () => clearInterval(t);
  }, [total, pausado]);

  return (
    <>
      <section className="relative flex min-h-[280px] items-center overflow-hidden px-7 py-14 text-white md:min-h-[340px] md:px-12">
        <img src="/img/servicios-hero.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,32,33,0.85)_0%,rgba(40,42,43,0.55)_50%,rgba(40,42,43,0.25)_100%)]" />
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="mb-2 text-[11px] tracking-[0.2em] text-[#e5e5e5]">SERVICIOS</div>
          <h1 className="font-serif text-3xl leading-tight drop-shadow md:text-4xl">Áreas de trabajo</h1>
          <p className="mt-3 font-serif text-lg text-[#e0b96a] drop-shadow md:text-xl">
            Más de 30 años de experiencia en cobranzas
          </p>
        </div>
      </section>

      <section className="px-7 py-14 md:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="max-w-xl text-sm leading-relaxed text-ink">
            Ofrecemos un servicio integral de cobranza para personas naturales y jurídicas, desde la gestión
            extrajudicial hasta la representación en tribunales.
          </p>

          {/* Carrusel de servicios */}
          <div className="relative mt-10" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
            <div className="overflow-hidden border border-[#ebeaea]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${actual * 100}%)` }}
              >
                {servicios.map((s) => (
                  <article key={s.title} className="flex w-full shrink-0 flex-col sm:flex-row">
                    <img src={s.img} alt={s.title} className="h-52 w-full object-cover sm:h-auto sm:w-64 sm:shrink-0" />
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] text-brand">
                          <s.icon strokeWidth={1.5} className="h-5 w-5" />
                        </span>
                        <h2 className="font-serif text-lg text-brand md:text-xl">{s.title}</h2>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink">{s.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-md ring-1 ring-black/5 transition-colors hover:bg-white sm:-left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-md ring-1 ring-black/5 transition-colors hover:bg-white sm:-right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {servicios.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActual(i)}
                  aria-label={`Ir a ${s.title}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === actual ? "bg-brand" : "bg-[#a09d9d] hover:bg-[#777474]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
