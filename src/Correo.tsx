import { useEffect, useState } from "react";

// Muestra un correo sin que la dirección aparezca "pegada" en el HTML:
// los robots que recolectan correos para spam no la encuentran, y
// Cloudflare no la reescribe (lo que rompería la página pre-renderizada).
// El enlace mailto: se activa recién en el navegador.
export default function Correo({ correo, className }: { correo: string; className?: string }) {
  const [usuario, dominio] = correo.split("@");
  const [href, setHref] = useState<string>();
  useEffect(() => setHref(`mailto:${usuario}@${dominio}`), [usuario, dominio]);

  return (
    <a href={href} className={className}>
      {usuario}
      <span>@</span>
      {dominio}
    </a>
  );
}
