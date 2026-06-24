import { ArrowLeft, ArrowUpRight, Play } from "lucide-react"

// ============================================================================
//  lucianomathias.com/musica — "O OUVIDO" (adendo / autoria)
//  → app/musica/page.tsx
//  3 discos autorais. Catálogo confirmado no Amazon Music.
// ============================================================================

const AMAZON = "https://music.amazon.com.br/artists/B00ELAWIZK/luciano-mathias"

const NAV = [
  ["AI Films", "/en/obra"],
  ["Courses & Mentoring", "/en/cursos/filmes-com-ia"],
  ["Photography", "/en/fotos"],
  ["Music", "/en/musica"],
  ["About", "/en/sobre"],
  ["Contact", "/en/contato"],
]

const ALBUMS = [
  {
    year: "2022",
    title: "Long Hope",
    cover: "/discos/long-hope.jpg",
    desc: "O disco mais recente — canção autoral em inglês, do primeiro verso à mixagem.",
  },
  {
    year: "2015",
    title: "Aquela da Balada",
    cover: "/discos/aquela-da-balada.jpg",
    desc: "A virada para o português, sem abrir mão da assinatura melódica e da produção própria.",
  },
  {
    year: "2010",
    title: "Believe Is Not Enough",
    cover: "/discos/believe-is-not-enough.jpg",
    desc: "O disco de estreia — onde o ouvido que hoje dirige filmes começou a ser formado.",
  },
]

export default function Musica() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/en" className="text-xs font-medium uppercase tracking-widest text-neutral-100">
            Luciano Mathias
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "Music" ? "text-white" : ""}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="border-b border-white/5 px-6 pb-12 pt-28">
        <div className="mx-auto max-w-6xl">
          <a href="/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </a>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">A percepção</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Sua primeira paixão: a música.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Com influências do folk, country e rock americano, Luciano já compôs, arranjou e produziu
            3 discos de estúdio.
          </p>
          <a
            href={AMAZON}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
          >
            <Play className="h-4 w-4" /> Ouvir no Amazon Music
          </a>
        </div>
      </section>

      {/* DISCOS */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Discografia</p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
            {ALBUMS.map((a) => (
              <a
                key={a.title}
                href={AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-neutral-950/60 p-8 transition hover:bg-neutral-900/60"
              >
                <div className="overflow-hidden rounded-xl bg-neutral-900">
                  <img
                    src={a.cover}
                    alt={`Capa do album ${a.title}`}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-light">{a.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-widest text-neutral-600">
                  Álbum · {a.year}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Além dos discos, singles como <span className="text-neutral-400">Right Side of the Road</span> e{" "}
            <span className="text-neutral-400">Vou Sair, Vou Pescar</span>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Entrepreneur · Speaker · Creative · Multimedia Artist · Insula AI</p>
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
