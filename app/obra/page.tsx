import { ArrowLeft, ArrowUpRight } from "lucide-react"

// ============================================================================
//  lucianomathias.com/obra — DIREÇÃO (portfólio do carro-chefe)
//  → app/obra/page.tsx
//  Filmes de marca dirigidos com IA. Crédito da dupla: "Harbor"
//  (NUNCA "Von Harbou" — nome aposentado por associação nazista).
// ============================================================================

const NAV = [
  ["Obra", "/obra"],
  ["Cursos e mentorias", "/cursos/filmes-com-ia"],
  ["Fotos", "/fotos"],
  ["Música", "/musica"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
]

const PROJECTS = [
  {
    tag: "Unilever · Brilhante",
    title: "Perfume Extraordinário",
    meta: "Direção: Harbor · Insula AI",
    desc: "Filme de marca dirigido com IA para a linha Brilhante, da Unilever — perfume, textura e atmosfera traduzidos em imagem.",
    id: "O9hFv0Nh-P4",
  },
  {
    tag: "KFC",
    title: "KFC",
    meta: "Direção · Insula AI",
    desc: "Filme publicitário dirigido com IA para a KFC, unindo apetite, ritmo e linguagem de campanha.",
    id: "Y51h7aMZV-Q",
  },
]

export default function Obra() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-serif text-sm tracking-wide text-neutral-100">
            Luciano Mathias
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "Obra" ? "text-white" : ""}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="border-b border-white/5 px-6 pb-16 pt-36">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
            <ArrowLeft className="h-3.5 w-3.5" /> Início
          </a>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Direção</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Filmes dirigidos com IA para marcas globais.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Direção, narrativa e linguagem de campanha — a inteligência artificial como ferramenta, o olhar
            como assinatura.
          </p>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-20">
          {PROJECTS.map((p, i) => (
            <article key={p.id} className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${p.id}`}
                    title={p.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{p.tag}</p>
                <h2 className="mt-3 font-serif text-3xl font-light leading-tight">{p.title}</h2>
                <p className="mt-4 text-neutral-400">{p.desc}</p>
                <p className="mt-6 text-xs uppercase tracking-widest text-neutral-600">{p.meta}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${p.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  Assistir no YouTube <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl font-light">Tem um filme em mente?</h2>
            <p className="mt-2 text-neutral-400">Direção de filmes com IA para marcas, agências e projetos próprios.</p>
          </div>
          <a
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
          >
            Falar sobre um projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Diretor · Autor multimídia · Insula AI</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-neutral-300">
                {label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Luciano Mathias</p>
        </div>
      </footer>
    </main>
  )
}
