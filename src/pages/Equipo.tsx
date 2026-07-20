// Equipo antiguo: 16 personas recuperadas del sitio original (fotos en /img/equipo/01-16.jpg).
// PENDIENTE: reemplazar "nombre" y "cargo" con los datos reales (salen del respaldo .sql).
const equipo = Array.from({ length: 16 }, (_, i) => ({
  nombre: `Integrante ${i + 1}`,
  cargo: "Por completar",
  foto: `/img/equipo/${String(i + 1).padStart(2, "0")}.jpg`,
}));

export default function Equipo() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">NUESTRO EQUIPO</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Quiénes somos</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink">
          Un equipo con amplia experiencia en gestión de cobranza extrajudicial y judicial,
          comprometido con la recuperación efectiva de acreencias y una atención cercana a
          cada cliente en Valparaíso y todo el país.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipo.map((p, i) => (
            <article key={i} className="text-center">
              {/* Al dejar la foto en public/img/, se mostrará automáticamente.
                  Si no existe, se ve el recuadro gris de reemplazo. */}
              <div className="mb-3 aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-[#f6f6f6]">
                <img
                  src={p.foto}
                  alt={p.nombre}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    el.parentElement!.classList.add("flex", "items-center", "justify-center");
                    el.parentElement!.innerHTML =
                      '<span class="font-serif text-xs italic text-subtle">Foto</span>';
                  }}
                />
              </div>
              <div className="font-serif text-sm text-brand">{p.nombre}</div>
              <div className="text-xs text-subtle">{p.cargo}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
