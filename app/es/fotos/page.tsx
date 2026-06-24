import { ArrowLeft, ArrowUpRight } from "lucide-react"

// ============================================================================
//  lucianomathias.com/fotos — "O OLHO" (adendo / autoria)
//  → app/fotos/page.tsx
//  Seleção curada das séries. A loja (prints + NFT) vive no artcrazyness.com.
//  Próximo passo: trocar os blocos por imagens reais das séries.
// ============================================================================

const ARTCRAZYNESS = "https://artcrazyness.com"

const NAV = [
  ["AI Films", "/es/obra"],
  ["Cursos y Mentorías", "/es/cursos/filmes-com-ia"],
  ["Fotografía", "/es/fotos"],
  ["Música", "/es/musica"],
  ["Acerca", "/es/sobre"],
  ["Contacto", "/es/contato"],
]

const SERIES = [
  { name: "Geometric Crazyness", note: "Líneas, simetría y la arquitectura como composición.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/METROPOLIS.jpg" },
  { name: "Accidentally Wes Anderson", note: "Color, frontalidad y encuadre de cine.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/IMG_2596.jpg" },
  { name: "Industrial Crazyness", note: "Textura, hierro y la belleza del abandono.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/IMG_3123.jpg" },
  { name: "London Crazyness", note: "La ciudad en tres partes — del Támesis a las calles.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/IMG_8955.jpg" },
  { name: "California Sun", note: "Luz, playa y el sueño americano.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/IMG_8291.jpg" },
  { name: "South American Dream", note: "La mirada de vuelta a casa.", img: "https://artcrazyness.com/wp-content/uploads/2021/06/IMG_1593.jpg" },
]

export default function Fotos() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/es" className="text-xs font-medium uppercase tracking-widest text-neutral-100">
            Luciano Mathias
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "Fotografía" ? "text-white" : ""}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="border-b border-white/5 px-6 pb-12 pt-28">
        <div className="mx-auto max-w-6xl">
          <a href="/es" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
            <ArrowLeft className="h-3.5 w-3.5" /> Inicio
          </a>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">La mirada</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Fotografía como autoría.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Series construidas con craft y mirada — de Londres a Nueva York, de California a
            Sudamérica. Exposición en <a href="https://fotos.estadao.com.br/galerias/cultura,abertura-da-exposicao-art-lab-foto-2021-com-65-fotografos-artlab-gallery-nos-jardins,42648" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white">Art Lab Gallery</a>, 2021.
          </p>
          <a
            href={ARTCRAZYNESS}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
          >
            Ver la galería completa y adquirir <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* SÉRIES */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Series seleccionadas</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERIES.map((s) => (
              <a
                key={s.name}
                href={ARTCRAZYNESS}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative flex aspect-[4/3] items-end overflow-hidden p-6">
                  <img src={s.img} alt={s.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="relative font-serif text-xl font-light leading-tight">{s.name}</span>
                </div>
                <div className="flex items-center justify-between gap-3 bg-neutral-950/60 p-5">
                  <p className="text-sm text-neutral-400">{s.note}</p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition group-hover:text-white" />
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-neutral-600">
            Prints y ediciones digitales disponibles en{" "}
            <a href={ARTCRAZYNESS} target="_blank" rel="noopener noreferrer" className="text-neutral-400 underline-offset-4 hover:underline">
              artcrazyness.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Empresario · Conferencista · Creativo · Artista multimedia · Insula AI</p>
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
