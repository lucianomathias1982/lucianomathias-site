"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"

// Preço de fundador: R$ 297 (cupom FUNDADOR, criado na Hotmart) para as 20 primeiras compras
// até 31/10 às 23h59 de Brasília. Depois disso tudo volta sozinho a R$ 497 e ao link sem cupom.
const PRAZO_FUNDADOR = Date.parse("2026-11-01T00:00:00-03:00")

export const CHECKOUT_PADRAO = "https://pay.hotmart.com/J103796288R?checkoutMode=10"
export const CHECKOUT_FUNDADOR = "https://pay.hotmart.com/J103796288R?off=7h3f7wr2&offDiscount=FUNDADOR&checkoutMode=10"

// Renderiza fechado no servidor e decide no navegador, para não exibir a oferta vencida em cache.
export function useFundador() {
  const [ativo, setAtivo] = useState(false)
  useEffect(() => {
    const resta = PRAZO_FUNDADOR - Date.now()
    setAtivo(resta > 0)
    // Quem está com a página aberta na virada vê o preço voltar a R$ 497 sem recarregar.
    if (resta <= 0 || resta > 2 ** 31 - 1) return
    const t = setTimeout(() => setAtivo(false), resta)
    return () => clearTimeout(t)
  }, [])
  return ativo
}

// Tempo restante até o fim do preço de fundador, atualizado a cada segundo (null no servidor).
function useRestante() {
  const [ms, setMs] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => setMs(Math.max(0, PRAZO_FUNDADOR - Date.now()))
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])
  if (ms === null) return null
  const s = Math.floor(ms / 1000)
  return { dias: Math.floor(s / 86400), horas: Math.floor((s % 86400) / 3600), min: Math.floor((s % 3600) / 60), seg: s % 60 }
}

const dois = (n: number) => String(n).padStart(2, "0")

// Contagem regressiva compacta, para a linha de preço do hero.
export function ContadorLinha() {
  const fundador = useFundador()
  const r = useRestante()
  if (!fundador || !r) return null
  return (
    <p className="mt-2 text-sm text-neutral-400">
      O preço de fundador acaba em{" "}
      <span className="whitespace-nowrap font-medium tabular-nums text-white">
        {r.dias > 0 && `${r.dias}d `}
        {dois(r.horas)}h {dois(r.min)}min {dois(r.seg)}s
      </span>
    </p>
  )
}

// Contagem regressiva em blocos, para o bloco de oferta.
export function ContadorBloco() {
  const fundador = useFundador()
  const r = useRestante()
  if (!fundador || !r) return null
  const partes = [
    { n: r.dias, l: r.dias === 1 ? "dia" : "dias" },
    { n: r.horas, l: "horas" },
    { n: r.min, l: "min" },
    { n: r.seg, l: "seg" },
  ]
  return (
    <div className="mt-6" role="timer" aria-label="Tempo restante do preço de fundador">
      <p className="text-xs text-neutral-400">Acaba em 31/10 às 23h59 (horário de Brasília)</p>
      <div className="mx-auto mt-3 flex max-w-xs justify-center gap-2">
        {partes.map((p) => (
          <div key={p.l} className="w-16 rounded-xl border border-white/10 bg-white/[0.03] py-2">
            <p className="font-display text-3xl leading-none tracking-wide tabular-nums text-white">{dois(p.n)}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{p.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function useCheckoutUrl() {
  return useFundador() ? CHECKOUT_FUNDADOR : CHECKOUT_PADRAO
}

// Link de compra que troca para o checkout com cupom enquanto o preço de fundador vale.
// O evento CliqueCheckout continua saindo de app/meta-pixel.tsx (clique em pay.hotmart.com).
export function BotaoCompra({ children, className = "" }: { children: ReactNode; className?: string }) {
  const href = useCheckoutUrl()
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

// Linha de preço do hero.
export function PrecoHero() {
  const fundador = useFundador()
  if (!fundador) {
    return (
      <p className="mt-4 text-sm text-neutral-300">
        <span className="font-medium text-white">R$ 497 à vista</span> · ou 12x de R$ 51,40 no cartão · Garantia de 15 dias
      </p>
    )
  }
  return (
    <p className="mt-4 text-sm text-neutral-300">
      <s className="text-neutral-500">R$ 497</s> <span className="font-medium text-white">R$ 297 à vista</span> · preço de
      fundador para as 20 primeiras compras até 31/10 · <span className="whitespace-nowrap">ou 12x de R$ 30,72</span> ·{" "}
      <span className="whitespace-nowrap">Garantia de 15 dias</span>
    </p>
  )
}

// Mesma classe de título da página do curso (TITLE em app/cursos/filmes-com-ia/page.tsx).
const PRECO_GRANDE = "font-display font-normal leading-[0.95] tracking-wide text-white text-6xl"

// Preço no bloco de oferta.
export function PrecoBloco() {
  const fundador = useFundador()
  if (!fundador) {
    return (
      <>
        <p className={PRECO_GRANDE}>R$ 497</p>
        <p className="mt-1 text-sm text-neutral-400">à vista no Pix ou no cartão</p>
        <p className="mt-2 text-sm text-neutral-300">ou 12x de R$ 51,40 no cartão</p>
      </>
    )
  }
  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#4ADE80]">Preço de fundador · até 31/10</p>
      <p className="mt-3 text-lg text-neutral-500">
        <s>R$ 497</s>
      </p>
      <p className={PRECO_GRANDE}>R$ 297</p>
      <p className="mt-1 text-sm text-neutral-400">à vista no Pix ou no cartão · 20 primeiras compras</p>
      <p className="mt-2 text-sm text-neutral-300">
        ou 12x de R$ 30,72 no cartão <span className="whitespace-nowrap">(com acréscimo da operadora)</span>
      </p>
    </>
  )
}
