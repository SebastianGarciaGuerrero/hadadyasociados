import { useSearchParams } from "react-router-dom";
import Honorarios369 from "../calculadora/modules/Honorarios369";
import AbonoCalc from "../calculadora/modules/AbonoCalc";
import AcuerdoCalc from "../calculadora/modules/AcuerdoCalc";
import { IconAbono, IconAcuerdo, IconHonorarios } from "../calculadora/components/icons";
import "../calculadora/calculadora.css";

const modulos = [
  {
    id: "honorarios",
    label: (
      <>
        Honorarios <span className="whitespace-nowrap">3-6-9</span>
      </>
    ),
    desc: "Gastos de cobranza sobre un capital",
    Icono: IconHonorarios,
    Modulo: Honorarios369,
  },
  {
    id: "abono",
    label: "Cálculo de abono",
    desc: "Separa capital y honorarios de un pago",
    Icono: IconAbono,
    Modulo: AbonoCalc,
  },
  {
    id: "acuerdo",
    label: "Acuerdo de pago",
    desc: "Cuotas, intereses y documento Word",
    Icono: IconAcuerdo,
    Modulo: AcuerdoCalc,
  },
];

export default function Calculadora() {
  // El módulo elegido queda en la URL (?modulo=abono) para poder compartirlo
  const [params, setParams] = useSearchParams();
  const actual = modulos.find((m) => m.id === params.get("modulo")) ?? modulos[0];
  const { Modulo } = actual;

  return (
    <section className="px-4 py-10 sm:px-7 md:px-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">CALCULADORA JUDICIAL</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Calculadora de cobranza</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink">
          Calcula los gastos de cobranza extrajudicial con la tabla escalonada 3-6-9 en UF o los honorarios judiciales,
          separa capital y honorarios de un abono y arma acuerdos de pago en cuotas.
        </p>

        {/* Selector de módulo */}
        <div role="tablist" aria-label="Módulos de la calculadora" className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
          {modulos.map((m) => {
            const activo = m.id === actual.id;
            return (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setParams(m.id === modulos[0].id ? {} : { modulo: m.id }, { replace: true })}
                className={`flex flex-col items-center gap-1.5 border px-2 py-3 text-center transition-colors sm:flex-row sm:items-start sm:gap-3 sm:px-4 sm:text-left ${
                  activo
                    ? "border-brand bg-brand text-white"
                    : "border-[#e5e5e5] bg-white text-ink hover:border-brand hover:text-brand"
                }`}
              >
                <m.Icono className="h-6 w-6 shrink-0" />
                <span>
                  <span className="block font-serif text-[13px] leading-tight sm:text-[15px]">{m.label}</span>
                  <span className={`mt-0.5 hidden text-xs sm:block ${activo ? "text-white/80" : "text-subtle"}`}>
                    {m.desc}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="calc369 mt-8">
          <Modulo key={actual.id} />
        </div>
      </div>
    </section>
  );
}
