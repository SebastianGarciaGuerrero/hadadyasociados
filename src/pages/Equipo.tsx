import type { SyntheticEvent } from "react";
import { img } from "../img";

type Persona = { nombre: string; cargo: string; foto: string };

// Para cambiar una foto, reemplaza el archivo en public/img/equipo/ con el mismo nombre.
const equipo: Persona[] = [
  // Socios: nombre completo
  { nombre: "Claudio Hadad Varas", cargo: "Ingeniero Comercial", foto: "/img/equipo/claudio-hadad-varas.jpg" },
  { nombre: "Inés Robles Carrasco", cargo: "Abogada", foto: "/img/equipo/ines-robles-carrasco.jpg" },
  // Staff: nombre y primer apellido (por privacidad, en una empresa de cobranza)
  { nombre: "Sonia Rivera", cargo: "Administración y Finanzas", foto: "/img/equipo/sonia-rivera.jpg" },
  { nombre: "Giselle Rojas", cargo: "Coordinadora de Operaciones", foto: "/img/equipo/giselle-rojas.jpg" },
  { nombre: "Gloria Varas", cargo: "Ejecutiva de Cuentas", foto: "/img/equipo/gloria-varas.jpg" },
  { nombre: "Gilda Chamorro", cargo: "Abogada", foto: "/img/equipo/gilda-chamorro.jpg" },
  { nombre: "Sergio Núñez", cargo: "Abogado", foto: "/img/equipo/sergio-nunez.jpg" },
  { nombre: "Tania Prieto", cargo: "Abogada", foto: "/img/equipo/tania-prieto.jpg" },
  { nombre: "Asliduan Tovar", cargo: "Procuradora", foto: "/img/equipo/asliduan-tovar.jpg" },
  { nombre: "Alicia García", cargo: "Procuradora", foto: "/img/equipo/alicia-garcia.jpg" },
  { nombre: "Edelizabeth Márquez", cargo: "Secretaria jurídica", foto: "/img/equipo/edelizabeth-marquez.jpg" },
  { nombre: "Yara Jamett", cargo: "Gestora de cuentas", foto: "/img/equipo/yara-jamett.jpg" },
  { nombre: "Karina Cohen", cargo: "Gestora de cuentas", foto: "/img/equipo/karina-cohen.jpg" },
  { nombre: "Cristian Rueda", cargo: "Gestor de cuentas", foto: "/img/equipo/cristian-rueda.jpg" },
  { nombre: "Grisel Muñoz", cargo: "Ejecutiva de terreno", foto: "/img/equipo/grisel-munoz.jpg" },
  { nombre: "Margaret Abrigo", cargo: "Secretaria recepción", foto: "/img/equipo/margaret-abrigo.jpg" },
  { nombre: "Mauricio Romero", cargo: "Coordinador de sistemas informáticos", foto: "/img/equipo/mauricio-romero.jpg" },
];

const socios: Persona[] = [
  { ...equipo[0], cargo: "Socio Fundador" },
  { ...equipo[1], cargo: "Socia" },
];
const staff = equipo.slice(2);

export default function Equipo() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">NUESTRO EQUIPO</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Nuestro equipo</h1>
        <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-ink">
          <p>Nuestra sociedad cuenta con un gran equipo en el área legal, administrativa y comercial.</p>
          <p>
            Nuestros profesionales brindan una atención de calidad que nos ha permitido mantener una fiel cartera de
            clientes, consolidando una atención integral tanto a personas naturales como jurídicas.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {socios.map((p) => (
            <Tarjeta key={p.foto} {...p} destacado />
          ))}
        </div>

        <div className="mt-14 mb-2 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#e0dede]" />
          <span className="font-serif text-sm uppercase tracking-[0.25em] text-subtle">Staff</span>
          <span className="h-px flex-1 bg-[#e0dede]" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {staff.map((p) => (
            <Tarjeta key={p.foto} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tarjeta({ nombre, cargo, foto, destacado = false }: Persona & { destacado?: boolean }) {
  // Si la foto no carga, se muestra un recuadro gris con "Foto"
  function sinFoto(e: SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    const caja = img.parentElement!;
    img.style.display = "none";
    caja.classList.add("flex", "items-center", "justify-center");
    caja.innerHTML = '<span class="font-serif text-xs italic text-subtle">Foto</span>';
  }

  return (
    <article className="group text-center transition-transform duration-300 ease-out hover:-translate-y-2">
      <div className="mb-3 aspect-square w-full overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f6f6f6] shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
        <img
          src={img(foto)}
          alt={nombre}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={sinFoto}
        />
      </div>
      <div className={`font-serif text-brand ${destacado ? "text-base md:text-lg" : "text-sm"}`}>{nombre}</div>
      <div className={`mt-0.5 text-subtle ${destacado ? "text-sm" : "text-xs"}`}>{cargo}</div>
    </article>
  );
}
