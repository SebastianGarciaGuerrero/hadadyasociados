import { ExternalLink } from "lucide-react";
import { links } from "../data";

export default function Links() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">LINKS DE INTERÉS</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Enlaces útiles</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
          Recursos y sitios de consulta relacionados con la gestión de cobranza y crédito.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-[#e5e5e5] p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-lg text-brand">{l.titulo}</h2>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-brand" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{l.descripcion}</p>
              <span className="mt-4 text-xs text-subtle group-hover:text-brand">
                {l.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
