// Se carga aparte (lazy) solo al entrar a /calculadora: así el resto del
// sitio no descarga el código ni los estilos de la calculadora.
import Honorarios369 from "./modules/Honorarios369";
import AbonoCalc from "./modules/AbonoCalc";
import AcuerdoCalc from "./modules/AcuerdoCalc";
import "./calculadora.css";

const modulos = {
  honorarios: Honorarios369,
  abono: AbonoCalc,
  acuerdo: AcuerdoCalc,
};

export type IdModulo = keyof typeof modulos;

export default function Modulo({ id }: { id: IdModulo }) {
  const Componente = modulos[id];
  return <Componente />;
}
