"use client"

import { useFaixaAula } from "./useAula"

// Faixa da aula aberta, logo abaixo do cabeçalho fixo da página do curso. Some depois de 18/11, 21h30.
export default function AulaBanner() {
  const visivel = useFaixaAula()
  if (!visivel) return null
  return (
    <div className="aula-banner relative z-10 mt-[65px] border-b border-[#4ADE80]/20 bg-[#4ADE80]/[0.08] px-6 py-2.5 text-center text-xs leading-relaxed text-neutral-200 sm:text-sm">
      <span className="block sm:inline">Aula aberta e gratuita · quarta, 18/11, às 20h</span>
      <span className="hidden sm:inline"> · </span>
      <span className="block sm:inline">
        sessão de direção ao vivo ·{" "}
        <a href="/aula" className="font-medium text-[#4ADE80] underline-offset-2 hover:underline">
          Inscreva-se →
        </a>
      </span>
    </div>
  )
}
