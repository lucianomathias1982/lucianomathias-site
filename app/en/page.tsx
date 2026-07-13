import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Music2,
  Clapperboard,
  Play,
} from "lucide-react"

// ============================================================================
//  lucianomathias.com — HOME DO DIRETOR (carro-chefe)
//  Espinha da marca: autor multimídia / diretor. A fotografia é o olho,
//  a música é o ouvido, o filme com IA é onde convergem.
//  Stack: Next.js (App Router) + Tailwind + lucide-react.
//
//  ROTEAMENTO:
//   • Este arquivo  →  app/page.tsx                      (home, lucianomathias.com)
//   • Curso         →  app/cursos/filmes-com-ia/page.tsx (o page.tsx que já criamos)
//   • Stubs a criar →  /obra · /fotos · /musica · /sobre · /contato
// ============================================================================

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
const HERO_VIDEO = `${BLOB}/Astronauta-H9YJ8hzMbp0a58JQhlW2h4SAHjEmxb.mp4`
const INSTRUCTOR_IMG = `${BLOB}/B8%20MIRANTE%20-%20PLENA%CC%81RIA%20-%20%40bembemfilmes%20%2840%29-CBdqS2JbT3YRLDuRmwiUddgbBqSJ0Q.jpg`

const REEL = [
  { src: `${BLOB}/BulletSlow-SEDoHs3iI6B9QIRDX6NBbafmZRbjz1.mp4`, label: "Cinematográfico" },
  { src: `${BLOB}/Cacador-uJkhLc9negazSr98X8RNqGq52a3Om3.mp4`, label: "Marca em cena" },
  { src: `${BLOB}/Bomba-qoW12ruxvPKp4SdsiIX4bYqsShNxxx.mp4`, label: "Efeitos especiais" },
  { src: `${BLOB}/LUAndandoLeao4-ZChZiuViYcZ3DhO4isodUvrPERsxay.mp4`, label: "Direção de cena" },
]

const BRANDS = ["Google", "Unilever", "KFC", "Insula AI", "PUC-SP"]

const CHAPTERS = [
  {
    icon: Camera,
    kicker: "The gaze",
    title: "Photography",
    desc: "Authorial series in geometry, light and city. Exhibited at Art Lab Gallery, 2021.",
    href: "/en/fotos",
  },
  {
    icon: Music2,
    kicker: "The perception",
    title: "Music",
    desc: "Composition, arrangement and production. Three albums written, recorded and produced from start to finish.",
    href: "/en/musica",
  },
  {
    icon: Clapperboard,
    kicker: "The convergence",
    title: "AI film",
    desc: "The gaze and perception meet in directing films with artificial intelligence for global brands.",
    href: "/en/obra",
  },
]

const NAV = [
  ["AI Films", "/en/obra"],
  ["Courses & Mentoring", "/en/cursos/filmes-com-ia"],
  ["Photography", "/en/fotos"],
  ["Music", "/en/musica"],
  ["About", "/en/sobre"],
  ["Contact", "/en/contato"],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* --------------------------------------------------------------- NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/en" className="text-xs font-medium uppercase tracking-widest text-neutral-100">
            Luciano Mathias
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ------------------------------------------------------------- HERO */}
      <section className="relative isolate overflow-hidden">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/70 via-neutral-950/80 to-neutral-950" />

        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-10">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Entrepreneur · Speaker · Creative · Multimedia Artist
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            One of the pioneers of artificial intelligence in Brazilian audiovisual.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            Luciano Mathias is co-founder and Chief Creative AI Officer at <a href="https://insula-ai.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-100 underline decoration-white/30 underline-offset-4 transition hover:decoration-white">Insula AI</a>, a film
            production company using artificial intelligence to expand the limits of creativity in the
            advertising and entertainment market.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/en/obra"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
            >
              View the work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/en/cursos/filmes-com-ia"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
            >
              <Play className="h-4 w-4" /> AI films — the course
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-neutral-500">
            {BRANDS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- A OBRA */}
      <section className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Directing</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">AI films</h2>
              <p className="mt-4 text-neutral-400">
                AI-directed films for brands, campaigns and authorial projects.
              </p>
            </div>
            <a
              href="/en/obra"
              className="hidden shrink-0 items-center gap-2 text-sm text-neutral-300 transition hover:text-white sm:inline-flex"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <figure className="group relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube-nocookie.com/embed/O9hFv0Nh-P4?autoplay=1&mute=1&loop=1&playlist=O9hFv0Nh-P4&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="Brilhante — Perfume Extraordinário"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-light text-neutral-200">
                Brilhante · Unilever
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube-nocookie.com/embed/Y51h7aMZV-Q?autoplay=1&mute=1&loop=1&playlist=Y51h7aMZV-Q&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="KFC"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-light text-neutral-200">
                KFC
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube-nocookie.com/embed/wc6uuefUL0Y?autoplay=1&mute=1&loop=1&playlist=wc6uuefUL0Y&controls=0&modestbranding=1&rel=0&playsinline=1"
                  title="Clear Man — FIFA World Cup"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-light text-neutral-200">
                Clear · Unilever
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ AUTOR MULTIMÍDIA */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Multimedia author
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              A vision built across three media.
            </h2>
            <p className="mt-4 text-neutral-400">
              Photography is the gaze. Music, perception. AI films are where the two meet.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
            {CHAPTERS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group flex flex-col bg-neutral-950/60 p-8 transition hover:bg-neutral-900/60"
              >
                <c.icon className="h-5 w-5 text-neutral-400" />
                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-500">{c.kicker}</p>
                <h3 className="mt-2 font-serif text-2xl font-light">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition group-hover:text-white">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- EDUCAÇÃO */}
      <section className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-neutral-900/40 p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Education</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
                AI films
              </h2>
              <p className="mt-4 max-w-md text-neutral-400">
                The course shows the full pipeline Luciano uses — from script to screen — so you can
                direct AI videos with a cinematic eye, even starting now.
              </p>
              <a
                href="/en/cursos/filmes-com-ia"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
              >
                Explore the course
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <video
                className="aspect-video w-full object-cover"
                src={`${BLOB}/Bomba-qoW12ruxvPKp4SdsiIX4bYqsShNxxx.mp4`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- SOBRE */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">About</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
                Luciano Mathias
              </h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Director and co-founder of Insula AI, a pioneering AI film studio operating in Brazil,
                Mexico, Argentina and the United States. Guest professor at PUC-SP, international speaker
                and one of the most active voices on the creative use of AI in the country.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center">
                {[
                  ["4+", "Countries of operation"],
                  ["2024", "Course at PUC-SP"],
                  ["7+", "International stages"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-neutral-950/60 px-3 py-5">
                    <p className="font-serif text-2xl font-light text-white">{n}</p>
                    <p className="mt-1 text-[11px] leading-tight text-neutral-400">{l}</p>
                  </div>
                ))}
              </div>
              <a
                href="/en/contato"
                className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
              >
                Discuss a project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={INSTRUCTOR_IMG}
                alt="Luciano Mathias on stage"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/5 px-6 py-10">
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
