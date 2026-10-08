"use client"

import { useEffect, useRef } from "react"

// Vídeo em loop que só baixa quando entra na tela e pausa quando sai.
// Até lá o visitante vê o poster (JPG leve), não uma tela preta.
export default function LazyVideo({
  src,
  poster,
  className = "",
}: {
  src: string
  poster: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.getAttribute("src")) v.src = src
          // O React não garante o atributo muted no DOM; sem ele o autoplay é bloqueado.
          v.muted = true
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { rootMargin: "200px 0px" },
    )
    // Só começa a observar depois do load da página, para os vídeos não
    // disputarem banda com o primeiro frame (poster, fontes e texto do hero).
    const start = () => io.observe(v)
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
    return () => {
      window.removeEventListener("load", start)
      io.disconnect()
    }
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  )
}
