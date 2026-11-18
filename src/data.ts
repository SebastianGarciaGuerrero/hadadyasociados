import { FileText, Gavel, Receipt, Scale, Stamp, type LucideIcon } from "lucide-react";

export type Servicio = {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
};

export const servicios: Servicio[] = [
  {
    icon: FileText,
    title: "Cobranza Extrajudicial",
    desc: "La gestión fuera de la vía judicial es fundamental para esclarecer el futuro de una causa: nos permite saber si el deudor tiene intención de pago o está en condiciones de asumir la deuda. Esta área hace posible resolver el 80% de las causas de deudores con intención de pago, llegando a un acuerdo o renegociando para asegurar a nuestro cliente el pago más conveniente de sus prestaciones.",
    img: "/img/servicios/extrajudicial.jpg",
  },
  {
    icon: Gavel,
    title: "Cobranza Judicial",
    desc: "Para la gestión dentro de la vía judicial se requiere no sólo de profesionales con conocimientos en el área, sino también de experiencia y atención constante que no descuide ningún detalle o documento. Para un servicio judicial de calidad contamos con abogados en la quinta región, procuradores judiciales y corresponsales en regiones.",
    img: "/img/servicios/judicial.jpg",
  },
  {
    icon: Scale,
    title: "Asesoría Legal y Financiera",
    desc: "Especialistas en el área aportan a nuestros clientes sus conocimientos y experiencia, entregando lineamientos que permitan el desarrollo de su empresa y la mejor estrategia de negocios, para mantenerse y destacar ante las competencias del mercado.",
    img: "/img/servicios/asesoria.jpg",
  },
  {
    icon: Stamp,
    title: "Certificado de Castigo",
    desc: "Terminadas todas las acciones de cobro (pre-judicial, extrajudicial o judicial), se emite un certificado de castigo contable. Este documento acredita a la empresa ante fiscalizaciones del Servicio de Impuestos Internos.",
    img: "/img/servicios/certificado.jpg",
  },
  {
    icon: Receipt,
    title: "Reorganización o liquidación forzosa",
    desc: "Asesoramiento y gestión de verificación de créditos. Ante la eventual liquidación de la empresa de un deudor, nos encargamos de la recuperación del IVA y el Impuesto a la Renta de la factura.",
    img: "/img/servicios/reorganizacion.jpg",
  },
];

// ancho: ancho del archivo del logo (todos miden 100 px de alto)
export type Cliente = { nombre: string; logo: string; ancho: number };

export const clientes: Cliente[] = [
  { nombre: "RedSalud", logo: "/img/clientes/redsalud.png", ancho: 360 },
  { nombre: "Clínica Ciudad del Mar", logo: "/img/clientes/clinica-ciudad-del-mar.jpg", ancho: 200 },
  { nombre: "Copec", logo: "/img/clientes/copec.jpg", ancho: 363 },
  { nombre: "Ansaldo", logo: "/img/clientes/ansaldo.jpg", ancho: 363 },
  { nombre: "Hapag-Lloyd", logo: "/img/clientes/hapag-lloyd.jpg", ancho: 470 },
  { nombre: "Inducom", logo: "/img/clientes/inducom.jpg", ancho: 267 },
  { nombre: "Reno", logo: "/img/clientes/reno.jpg", ancho: 188 },
];

export type LinkInteres = { titulo: string; descripcion: string; url: string };

export const links: LinkInteres[] = [
  {
    titulo: "Indicadores Económicos",
    descripcion: "Valores oficiales del día: UF, UTM, dólar, euro e IPC (Banco Central de Chile).",
    url: "https://www.bcentral.cl/",
  },
  {
    titulo: "Empresas en Liquidación",
    descripcion: "Boletín Concursal: procedimientos de reorganización y liquidación.",
    url: "https://www.boletinconcursal.cl/boletin/procedimientos",
  },
  {
    titulo: "Norma Castigos Contables",
    descripcion: "Circular del Servicio de Impuestos Internos sobre castigos de créditos.",
    url: "https://www.sii.cl/documentos/circulares/2008/circu24.htm",
  },
  {
    titulo: "Diario Financiero",
    descripcion: "Noticias de economía, mercados y negocios de Chile.",
    url: "https://www.df.cl/",
  },
  {
    titulo: "Situación Tributaria de Terceros",
    descripcion: "Consulta en el SII la situación tributaria de un contribuyente.",
    url: "https://www2.sii.cl/stc/noauthz",
  },
];

export const contacto = {
  direccion: "Errázuriz 1178, Oficina 74, Valparaíso",
  telefono: "(32) 245 09 90",
  correo: "recepcion@hadadyasociados.cl",
};

export type CuentaPago = {
  ciudad: string;
  razonSocial: string;
  rut: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  correo: string;
};

export const cuentasPago: CuentaPago[] = [
  {
    ciudad: "Iquique",
    razonSocial: "Clínica Iquique S.A.",
    rut: "96.598.850-5",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "107-01934-05",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Elqui",
    razonSocial: "Clínica Regional del Elqui SpA",
    rut: "99.533.790-8",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "00-120-10118-01",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Valparaíso",
    razonSocial: "Clínica Valparaíso SpA",
    rut: "99.568.720-8",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "00-149-02051-01",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Santiago",
    razonSocial: "Clínica Bicentenario SpA",
    rut: "96.885.930-7",
    banco: "Banco de Chile",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "00-800-15900-04",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Rancagua",
    razonSocial: "Clínica de Salud Integral S.A.",
    rut: "78.918.290-6",
    banco: "Banco BCI",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "56086270",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Temuco",
    razonSocial: "Inmobiliaria Inversalud SpA",
    rut: "96.774.580-4",
    banco: "Banco BCI",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "66048559",
    correo: "recepcion@hadadyasociados.cl",
  },
  {
    ciudad: "Magallanes",
    razonSocial: "Clínica Magallanes SpA",
    rut: "96.567.920-0",
    banco: "Banco BCI",
    tipoCuenta: "Cuenta corriente",
    numeroCuenta: "71040960",
    correo: "recepcion@hadadyasociados.cl",
  },
];
