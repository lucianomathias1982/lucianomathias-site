import type { Metadata } from "next"
import { ArrowRight, Download } from "lucide-react"
import LeadPixel from "./LeadPixel"

// Destino do redirecionamento do Hotmart Send depois do cadastro.
export const metadata: Metadata = {
  title: "Seu guia está pronto | Luciano Mathias",
  robots: { index: false, follow: false },
}

const COURSE = "/cursos/filmes-com-ia?utm_source=leadmagnet&utm_medium=obrigado&utm_campaign=decupagem"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-neutral-100 antialiased">
      <LeadPixel />
      <header className="mx-auto max-w-6xl px-6 py-5">
        <a href="/" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
      </header>

      <section className="mx-auto max-w-2xl px-6 pb-20 pt-10 sm:pt-20 md:flex md:min-h-[calc(100vh-140px)] md:flex-col md:justify-center md:pt-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 sm:text-xs sm:tracking-[0.3em]">
          Guia gratuito · Decupagem
        </p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] tracking-wide text-white sm:text-8xl">
          Seu guia está pronto<span className="text-[#4ADE80]">.</span>
        </h1>

        <a
          href="/guias/decupagem.pdf"
          download
          className="group mt-10 inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
        >
          <Download className="h-4 w-4" /> Baixar o guia (PDF)
        </a>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400">
          Também enviamos o link para o seu e-mail. Se não chegar em alguns minutos, olhe a caixa de promoções ou de spam.
        </p>

        <a
          href={COURSE}
          className="group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-neutral-300 transition hover:border-white/20 hover:text-white"
        >
          Quer ir além da decupagem? Conheça o curso Filmes com IA
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </a>
      </section>
    </main>
  )
}
