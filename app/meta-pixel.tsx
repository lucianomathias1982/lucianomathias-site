"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { PIXEL_ID, metaEvent } from "./meta-events"

// Meta Pixel — "Pixel LM" (Gerenciador de Eventos, portfólio Luciano IA)
// PageView em toda navegação, ViewContent nas páginas do curso (mais VerObra, VerPreco e
// VerAula no funil da página) e um evento
// próprio (CliqueCheckout) nos botões que levam à Hotmart, e CliqueMentoria nos
// links para o formulário da mentoria (forms.gle / docs.google.com/forms). O InitiateCheckout
// e o Purchase ficam a cargo do pixel configurado no checkout da Hotmart.
// Todos os eventos daqui também vão pela API de Conversões (app/meta-events.ts).
export default function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    metaEvent("PageView")
    if (pathname && pathname.includes("/cursos/filmes-com-ia")) {
      metaEvent("ViewContent", {
        content_name: "Filmes com IA",
        content_type: "product",
        value: 497,
        currency: "BRL",
      })
    }
  }, [pathname])

  // Funil dentro da página do curso: VerObra quando #a-obra fica 50% visível e
  // VerPreco quando #oferta fica 50% visível. Cada um dispara uma vez por visita.
  useEffect(() => {
    if (!pathname || !pathname.includes("/cursos/filmes-com-ia")) return
    const marks: [string, string, Record<string, unknown>?][] = [
      ["a-obra", "VerObra"],
      ["oferta", "VerPreco", { value: 497, currency: "BRL" }],
    ]
    const fired = new Set<string>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // 50% da seção visível — ou metade da tela, se a seção for mais alta que a tela.
          const viewH = e.rootBounds?.height ?? window.innerHeight
          const need = 0.5 * Math.min(e.boundingClientRect.height, viewH)
          if (!e.isIntersecting || e.intersectionRect.height < need) continue
          const mark = marks.find(([id]) => id === e.target.id)
          if (!mark || fired.has(mark[1])) continue
          fired.add(mark[1])
          metaEvent(mark[1], mark[2])
          io.unobserve(e.target)
        }
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    )
    let tries = 0
    let timer: ReturnType<typeof setTimeout>
    const watch = () => {
      const els = marks.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      if (els.length < marks.length && tries++ < 20) {
        timer = setTimeout(watch, 100)
        return
      }
      els.forEach((el) => io.observe(el))
    }
    watch()
    return () => {
      clearTimeout(timer)
      io.disconnect()
    }
  }, [pathname])

  // VerAula: play num trecho de aula (vídeos com controles na página do curso), uma vez por vídeo.
  useEffect(() => {
    if (!pathname || !pathname.includes("/cursos/filmes-com-ia")) return
    const played = new Set<string>()
    function onPlay(e: Event) {
      const v = e.target as HTMLVideoElement | null
      if (!v || v.tagName !== "VIDEO" || !v.controls) return
      const aula = (v.currentSrc || v.src).split("/").pop() || ""
      if (played.has(aula)) return
      played.add(aula)
      metaEvent("VerAula", { aula })
    }
    document.addEventListener("play", onPlay, true)
    return () => document.removeEventListener("play", onPlay, true)
  }, [pathname])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
      if (!a) return
      // Clique no formulário da mentoria (Google Forms).
      if (a.href.includes("forms.gle") || a.href.includes("docs.google.com/forms")) {
        metaEvent("CliqueMentoria")
        return
      }
      if (!a.href.includes("pay.hotmart.com")) return
      // Link com o cupom FUNDADOR (preço de fundador até 31/10) vale R$ 297; o padrão, R$ 497.
      const value = a.href.includes("offDiscount=FUNDADOR") ? 297 : 497
      metaEvent("CliqueCheckout", { content_name: "Filmes com IA", value, currency: "BRL" })
      // Repassa UTMs da visita para o checkout, para a Hotmart atribuir a origem da venda.
      try {
        const here = new URLSearchParams(window.location.search)
        const url = new URL(a.href)
        here.forEach((v, k) => {
          if ((k.startsWith("utm_") || k === "src" || k === "sck") && !url.searchParams.has(k)) {
            url.searchParams.set(k, v)
          }
        })
        a.href = url.toString()
      } catch {}
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq.disablePushState=true;
fbq('init','${PIXEL_ID}');`}
      </Script>
    </>
  )
}
