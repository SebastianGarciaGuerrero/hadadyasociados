import { servicios } from "../data";

export default function Servicios() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">SERVICIOS</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Áreas de trabajo</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
          Ofrecemos un servicio integral de cobranza para personas naturales y jurídicas,
          desde la gestión extrajudicial hasta la representación en tribunales.
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {servicios.map((s) => (
            <article key={s.title} className="flex gap-5 border border-[#ebeaea] p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f6f6f6] text-brand">
                <s.icon strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-lg text-brand">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
