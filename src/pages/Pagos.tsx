import { useState } from "react";
import { Building2, Check, Copy } from "lucide-react";
import { contacto, cuentasPago, type CuentaPago } from "../data";
import Correo from "../Correo";

function textoParaCopiar(c: CuentaPago) {
  return [
    c.razonSocial,
    `RUT: ${c.rut}`,
    `Banco: ${c.banco}`,
    `${c.tipoCuenta}: ${c.numeroCuenta}`,
    `Correo: ${c.correo}`,
  ].join("\n");
}

function TarjetaCuenta({ c }: { c: CuentaPago }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    const texto = textoParaCopiar(c);
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = texto;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  const filas: [string, string][] = [
    ["Razón social", c.razonSocial],
    ["RUT", c.rut],
    ["Banco", c.banco],
    [c.tipoCuenta, c.numeroCuenta],
    ["Correo", c.correo],
  ];

  return (
    <article className="flex flex-col border border-[#e5e5e5] bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 border-b border-[#ebeaea] bg-[#f8f8f8] px-5 py-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Building2 strokeWidth={1.6} className="h-5 w-5" />
        </span>
        <h2 className="font-serif text-lg text-brand">{c.ciudad}</h2>
      </div>
      <dl className="flex-1 divide-y divide-[#f0efef] px-5 py-2 text-sm">
        {filas.map(([k, v]) => (
          <div key={k} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="shrink-0 text-subtle">{k}</dt>
            <dd className="break-words font-medium text-ink sm:text-right sm:break-all">
              {v.includes("@") ? <Correo correo={v} /> : v}
            </dd>
          </div>
        ))}
      </dl>
      <div className="px-5 pb-5 pt-2">
        <button
          type="button"
          onClick={copiar}
          className={`flex w-full items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm font-medium transition-colors ${
            copiado ? "bg-[#2e7d32] text-white" : "bg-brand text-white hover:bg-[#5f0d0d]"
          }`}
        >
          {copiado ? (
            <>
              <Check className="h-4 w-4" /> ¡Datos copiados!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" /> Copiar datos
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function Pagos() {
  return (
    <section className="px-7 py-14 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2 text-[11px] tracking-[0.15em] text-subtle">PAGOS</div>
        <h1 className="font-serif text-2xl text-brand md:text-3xl">Paga tu cuenta</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink">
          Puedes pagar tu cuenta mediante transferencia electrónica. Busca tu clínica y usa los datos de la cuenta
          correspondiente. Una vez realizada la transferencia, envía el comprobante al correo indicado.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cuentasPago.map((c) => (
            <TarjetaCuenta key={c.ciudad} c={c} />
          ))}
        </div>
        <p className="mt-10 text-xs leading-relaxed text-subtle">
          Importante: verifica cuidadosamente los datos antes de transferir. Ante cualquier duda, comunícate con
          nosotros al {contacto.telefono}.
        </p>
      </div>
    </section>
  );
}
