import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <section className="px-7 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">ERROR 404</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Página no encontrada</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
          La página que buscas no existe o cambió de dirección.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-sm bg-brand px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#5f0d0d]"
        >
          Ir al inicio
        </Link>
      </div>
    </section>
  );
}
