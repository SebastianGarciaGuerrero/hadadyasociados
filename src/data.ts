import { FileText, Gavel, Scale, type LucideIcon } from "lucide-react";

export type Servicio = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const servicios: Servicio[] = [
  {
    icon: FileText,
    title: "Cobranza Extrajudicial",
    desc: "Gestión persuasiva y directa para recuperar acreencias antes de llegar a tribunales, mediante notificaciones, llamados y negociación de acuerdos de pago.",
  },
  {
    icon: Gavel,
    title: "Cobranza Judicial",
    desc: "Representación en juicios ejecutivos y ordinarios, con seguimiento riguroso del proceso hasta el pago íntegro de la obligación.",
  },
  {
    icon: Scale,
    title: "Asesoría Legal",
    desc: "Acompañamiento legal a personas naturales y jurídicas en materia de crédito, cobranza y recuperación de deudas.",
  },
];

export type Cliente = { nombre: string; logo: string };

export const clientes: Cliente[] = [
  { nombre: "Clínica Ciudad del Mar", logo: "/img/clientes/clinica-ciudad-del-mar.jpg" },
  { nombre: "Clínica Reñaca", logo: "/img/clientes/clinica-renaca.jpg" },
  { nombre: "Clínica Valparaíso", logo: "/img/clientes/clinica-valparaiso.jpg" },
  { nombre: "Copec", logo: "/img/clientes/copec.jpg" },
  { nombre: "Ansaldo", logo: "/img/clientes/ansaldo.jpg" },
  { nombre: "Covisa", logo: "/img/clientes/covisa.jpg" },
  { nombre: "Hapag-Lloyd", logo: "/img/clientes/hapag-lloyd.jpg" },
  { nombre: "Inducom", logo: "/img/clientes/inducom.jpg" },
  { nombre: "Neumaval", logo: "/img/clientes/neumaval.jpg" },
  { nombre: "Dimasa", logo: "/img/clientes/dimasa.jpg" },
  { nombre: "Netpag", logo: "/img/clientes/netpag.jpg" },
  { nombre: "Reno", logo: "/img/clientes/reno.jpg" },
  { nombre: "Dealer and Law", logo: "/img/clientes/dealer-and-law.jpg" },
];

export const contacto = {
  direccion: "Errázuriz 1178, Of. 74, Valparaíso",
  telefono: "(32) 245 09 90",
};
