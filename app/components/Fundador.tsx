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
    setAtivo(Date.now() < PRAZO_FUNDADOR)
  }, [])
  return ativo
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
