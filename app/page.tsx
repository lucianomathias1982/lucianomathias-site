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
  { src: `${BLOB}/Skate-9v9rXOB8tNMzaCJBdfg2kXS1u6LA3k.mp4`, label: "Realismo" },
]

const BRANDS = ["Google", "Unilever", "KFC", "Insula AI", "PUC-SP"]

const CHAPTERS = [
  {
    icon: Camera,
    kicker: "O olho",
    title: "Fotografia",
    desc: "Séries autorais em geometria, luz e cidade. Exposição na Art Lab Gallery, 2021.",
    href: "/fotos",
  },
  {
    icon: Music2,
    kicker: "O ouvido",
    title: "Música",
    desc: "Composição, arranjo e produção. Três discos escritos, gravados e produzidos do início ao fim.",
    href: "/musica",
  },
  {
    icon: Clapperboard,
    kicker: "A convergência",
    title: "Filme com IA",
    desc: "O olho e o ouvido se encontram na direção de filmes com inteligência artificial para marcas globais.",
    href: "/obra",
  },
]

const NAV = [
  ["AI Films", "/obra"],
  ["Cursos & Mentorias", "/cursos/filmes-com-ia"],
  ["Fotografia", "/fotos"],
  ["Música", "/musica"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* --------------------------------------------------------------- NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="font-serif text-sm tracking-wide text-neutral-100">
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

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Empresário · Palestrante · Criativo · Artista multimídia
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Um dos pioneiros da inteligência artificial no audiovisual brasileiro.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            Luciano Mathias dirige filmes com IA para marcas globais e, à frente da Insula AI,
            ajuda a definir o que o Brasil é capaz de criar nessa nova linguagem.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/obra"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
            >
              Ver a obra
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/cursos/filmes-com-ia"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
            >
              <Play className="h-4 w-4" /> Filmes com IA — o curso
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
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Direção</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">A obra</h2>
              <p className="mt-4 text-neutral-400">
                Filmes dirigidos com IA — para marcas, campanhas e narrativas próprias.
              </p>
            </div>
            <a
              href="/obra"
              className="hidden shrink-0 items-center gap-2 text-sm text-neutral-300 transition hover:text-white sm:inline-flex"
            >
              Ver tudo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {REEL.map((f) => (
              <figure key={f.src} className="group relative overflow-hidden rounded-xl bg-neutral-900">
                <video
                  className="aspect-[9/13] w-full object-cover transition duration-700 group-hover:scale-105"
                  src={f.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-light text-neutral-200">
                  {f.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ AUTOR MULTIMÍDIA */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
              Autor multimídia
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              Um olhar construído em três mídias.
            </h2>
            <p className="mt-4 text-neutral-400">
              A fotografia é o olho. A música é o ouvido. O filme com IA é onde os dois se encontram —
              e é por isso que a direção tem assinatura, não fórmula.
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
                  Explorar <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- EDUCAÇÃO */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 rounded-3xl border border-white/10 bg-neutral-900/40 p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Educação</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
                Filmes com IA
              </h2>
              <p className="mt-4 max-w-md text-neutral-400">
                O curso onde eu mostro o pipeline completo — do roteiro à tela — para você dirigir vídeos
                com IA com olhar de cinema, mesmo começando agora.
              </p>
              <a
                href="/cursos/filmes-com-ia"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
              >
                Conhecer o curso
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
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Sobre</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
                Luciano Mathias
              </h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Diretor e co-fundador da Insula AI, produtora pioneira em filmes por IA com atuação no
                Brasil, México, Argentina e Estados Unidos. Professor convidado da PUC-SP, palestrante
                internacional e uma das vozes mais ativas sobre o uso criativo da IA no país.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center">
                {[
                  ["4+", "Países de atuação"],
                  ["2024", "Curso na PUC-SP"],
                  ["7+", "Palcos internacionais"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-neutral-950/60 px-3 py-5">
                    <p className="font-serif text-2xl font-light text-white">{n}</p>
                    <p className="mt-1 text-[11px] leading-tight text-neutral-400">{l}</p>
                  </div>
                ))}
              </div>
              <a
                href="/contato"
                className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
              >
                Falar sobre um projeto <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={INSTRUCTOR_IMG}
                alt="Luciano Mathias em plenária"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Empresário · Palestrante · Criativo · Artista multimídia · Insula AI</p>
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
