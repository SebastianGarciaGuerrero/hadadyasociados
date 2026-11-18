import { img } from "../img";

export default function Nosotros() {
  return (
    <>
      <section className="relative flex min-h-[240px] items-center overflow-hidden px-7 py-14 text-white md:min-h-[300px] md:px-12">
        <img
          src={img("/img/nosotros.jpg")}
          alt=""
          aria-hidden="true"
          width={1100}
          height={400}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,32,33,0.82)_0%,rgba(40,42,43,0.5)_50%,rgba(40,42,43,0.22)_100%)]" />
        <div className="relative mx-auto w-full max-w-3xl">
          <div className="mb-2 text-[11px] tracking-[0.2em] text-[#e5e5e5]">NOSOTROS</div>
          <h1 className="font-serif text-3xl leading-tight drop-shadow md:text-4xl">Quiénes somos</h1>
        </div>
      </section>

      <section className="px-7 py-14 md:px-12">
        <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-ink">
          <p>
            <span className="font-serif text-brand">Hadad &amp; Asociados Profesionales Limitada</span> es una
            sociedad con más de treinta años de experiencia en el rubro de la cobranza. Desde entonces cumplimos con el
            objetivo de atender y resolver las necesidades financieras de nuestros clientes, teniendo como giro principal
            el recupero de créditos tanto por la vía judicial como la extrajudicial.
          </p>
          <p>
            Los socios que conforman nuestro equipo son el ingeniero comercial don Claudio Hadad Varas y la abogada doña
            Inés Robles Carrasco, reconocidos en la quinta región por su trayectoria profesional y su gestión en el área
            de cobranzas y asesorías para el desarrollo de políticas de respaldo de créditos.
          </p>
          <div className="border-l-4 border-brand bg-[#f8f6f6] p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-brand">Nuestro compromiso</div>
            <p className="mt-2 font-serif text-lg leading-snug text-ink md:text-xl">
              Maximizar la eficiencia en el rendimiento de tu cartera morosa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
