"use client"

import { useEffect, useState } from "react"

// Turma de outubro: bônus de devolutiva escrita para as 20 primeiras compras até 31/10.
// Some sozinho à meia-noite de 1º/11 (horário de Brasília). Quando as 20 vagas
// acabarem antes do prazo, basta trocar VAGAS_ABERTAS para false e publicar.
const PRAZO = Date.parse("2026-11-01T00:00:00-03:00")
const VAGAS_ABERTAS = true

function useAberta() {
  // Renderiza fechado no servidor e decide no navegador, para não exibir a oferta vencida em cache.
  const [aberta, setAberta] = useState(false)
  useEffect(() => {
    const resta = PRAZO - Date.now()
    setAberta(VAGAS_ABERTAS && resta > 0)
    // Fecha sozinho na virada para quem está com a página aberta, junto com o preço de fundador.
    if (!VAGAS_ABERTAS || resta <= 0 || resta > 2 ** 31 - 1) return
    const t = setTimeout(() => setAberta(false), resta)
    return () => clearTimeout(t)
  }, [])
  return aberta
}

export function TurmaOutubroLinha() {
  const aberta = useAberta()
  if (!aberta) return null
  return (
    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4ADE80] sm:text-base">
      <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
      Turma de outubro: R$ 297 e devolutiva escrita de Luciano para as 20 primeiras compras, até 31/10.
    </p>
  )
}

export function TurmaOutubroBloco() {
  const aberta = useAberta()
  if (!aberta) return null
  return (
    <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#4ADE80]/30 bg-[#4ADE80]/[0.06] p-6 text-left">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#4ADE80]">
        Turma de outubro · 20 vagas · até 31/10
      </p>
      <p className="mt-3 text-base font-medium text-neutral-100">
        Preço de fundador de R$ 297 e uma devolutiva escrita de Luciano sobre o seu primeiro filme.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        Escreva a decupagem do seu filme de 30 segundos (a história em três atos e a lista de planos) e envie. Luciano lê e devolve,
        por escrito, o que ele mudaria como diretor antes de qualquer frame ser gerado: história, planos,
        continuidade e ritmo. Exclusivo para as 20 primeiras compras feitas até 31 de outubro.
      </p>
      <p className="mt-3 text-xs text-neutral-500">
        Depois da compra, envie a sua decupagem para suporte@lucianomathias.com até 30 de novembro.
      </p>
    </div>
  )
}
