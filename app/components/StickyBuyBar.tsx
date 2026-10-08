"use client"

import { useEffect, useState } from "react"

// Barra de compra fixa no mobile: aparece quando o hero sai da tela e some
// enquanto a seção de oferta está visível, para não duplicar o botão.
// Fica acima do seletor de idioma (z-60), que volta a aparecer quando a barra some.
export default function StickyBuyBar({ href }: { href: string }) {
  const [heroVisible, setHeroVisible] = useState(true)
  const [offerVisible, setOfferVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    const offer = document.getElementById("oferta")
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setHeroVisible(e.isIntersecting)
        if (e.target === offer) setOfferVisible(e.isIntersecting)
      }
    })
    if (hero) io.observe(hero)
    if (offer) io.observe(offer)
    return () => io.disconnect()
  }, [])

  const show = !heroVisible && !offerVisible

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-neutral-950/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-neutral-200">
          Filmes com IA · <span className="font-medium text-white">R$ 497</span>
        </p>
        <a
          href={href}
          tabIndex={show ? 0 : -1}
          className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Quero o curso
        </a>
      </div>
    </div>
  )
}
