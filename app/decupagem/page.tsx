import type { Metadata } from "next"
import { Check } from "lucide-react"
import DecupagemForm from "./DecupagemForm"

// ============================================================================
//  Página de captura do guia gratuito "Decupagem". Acesso só por link direto
//  (fora do menu). O formulário vai para o Hotmart Send, que envia o PDF e a
//  sequência de e-mails e redireciona para /decupagem/obrigado.
// ============================================================================

const SUBTITLE =
  "O guia do diretor para transformar uma ideia em plano de filmagem antes de abrir qualquer ferramenta de IA."
const COVER = "/guias/decupagem-capa.jpg"

export const metadata: Metadata = {
  title: "Decupagem — guia gratuito | Luciano Mathias",
  description: SUBTITLE,
  openGraph: {
    title: "Decupagem — guia gratuito | Luciano Mathias",
    description: SUBTITLE,
    images: [{ url: `https://lucianomathias.com${COVER}`, width: 909, height: 1287 }],
  },
}

const ITEMS = [
  "As cinco decisões que um diretor toma antes do primeiro prompt",
  "Um filme de 30 segundos decupado plano a plano, com o prompt pronto",
  "Uma ficha em branco e um checklist para o seu próximo filme",
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-neutral-100 antialiased">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <a href="/" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
      </header>

      {/* Mobile: rótulo e título, capa, texto e formulário. Desktop: texto e formulário à esquerda, capa à direita. */}
      <section className="mx-auto grid max-w-6xl gap-y-8 px-6 pb-16 pt-4 md:min-h-[calc(100vh-140px)] md:grid-cols-[1.1fr_0.9fr] md:content-center md:gap-x-16 md:pt-0">
        <div className="md:col-start-1 md:row-start-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 sm:text-xs sm:tracking-[0.3em]">
            Guia gratuito · Luciano Mathias
          </p>
          <h1 className="mt-4 font-display text-7xl leading-[0.9] tracking-wide text-white sm:text-8xl lg:text-9xl">
            Decupagem<span className="text-[#4ADE80]">.</span>
          </h1>
        </div>

        <div className="flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:items-center">
          <img
            src={COVER}
            alt="Capa do guia Decupagem, de Luciano Mathias"
            width={909}
            height={1287}
            fetchPriority="high"
            className="w-[62%] max-w-[260px] rotate-[3deg] rounded-lg shadow-2xl shadow-black/70 ring-1 ring-white/10 md:w-full md:max-w-[400px]"
          />
        </div>

        <div className="md:col-start-1 md:row-start-2">
          <p className="max-w-xl text-lg leading-[1.6] text-neutral-300">{SUBTITLE}</p>
          <ul className="mt-6 space-y-3">
            {ITEMS.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4ADE80]" />
                {i}
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-md">
            <DecupagemForm />
            <p className="mt-6 text-xs text-neutral-500">De quem dirige filmes com IA para Google, Unilever e KFC.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8">
        <p className="mx-auto max-w-6xl text-xs text-neutral-600">© {new Date().getFullYear()} Luciano Mathias</p>
      </footer>
    </main>
  )
}
