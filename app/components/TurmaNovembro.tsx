"use client"

import { useBonusNovembro } from "./useAula"

// Turma de novembro: bônus de devolutiva escrita para as 20 primeiras compras até 22/11.
// Some sozinho depois de 22/11, 23h59. Quando as 20 vagas acabarem antes do prazo,
// basta trocar VAGAS_ABERTAS para false e publicar.
const VAGAS_ABERTAS = true

function useAberta() {
  const dentroDoPrazo = useBonusNovembro()
  return VAGAS_ABERTAS && dentroDoPrazo
}

export function TurmaNovembroLinha() {
  const aberta = useAberta()
  if (!aberta) return null
  return (
    <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-[#4ADE80] sm:text-base">
      Turma de novembro: quem comprar até domingo, 22/11, recebe uma devolutiva escrita de Luciano sobre o primeiro filme feito no curso. Limite de 20 alunos.
    </p>
  )
}

export function TurmaNovembroBloco() {
  const aberta = useAberta()
  if (!aberta) return null
  return (
    <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#4ADE80]/30 bg-[#4ADE80]/[0.06] p-6 text-left">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#4ADE80]">Turma de novembro · até 22/11</p>
      <p className="mt-3 text-base font-medium text-neutral-100">
        Uma devolutiva escrita de Luciano sobre o seu primeiro filme feito no curso: decupagem, continuidade e ritmo.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        Exclusivo para as 20 primeiras compras feitas até domingo, 22 de novembro. Em troca, pedimos um depoimento sincero sobre o curso depois da devolutiva.
      </p>
      <p className="mt-3 text-xs text-neutral-500">Quando terminar o filme, envie para suporte@lucianomathias.com.</p>
    </div>
  )
}
