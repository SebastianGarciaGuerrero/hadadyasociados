import { Mail, MapPin, Phone } from "lucide-react";
import { contacto } from "../data";

export default function Contacto() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">CONTACTO</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Dónde encontrarnos</h1>

        <ul className="mt-8 flex flex-col gap-5 text-sm text-ink">
          <li className="flex items-start gap-3">
            <MapPin strokeWidth={1.5} className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <div className="font-serif text-brand">Oficina</div>
              <div>{contacto.direccion}</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Phone strokeWidth={1.5} className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <div className="font-serif text-brand">Teléfono</div>
              <div>{contacto.telefono}</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Mail strokeWidth={1.5} className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <div className="font-serif text-brand">Correo</div>
              <a href={`mailto:${contacto.correo}`} className="transition-colors hover:text-brand">
                {contacto.correo}
              </a>
            </div>
          </li>
        </ul>

        <div className="mt-10 overflow-hidden border border-[#e5e5e5]">
          <iframe
            title="Ubicación Hadad & Asociados"
            src="https://www.google.com/maps?q=Err%C3%A1zuriz%201178%2C%20Valpara%C3%ADso&output=embed"
            className="h-64 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
