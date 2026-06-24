import { ArrowLeft, ArrowUpRight, Film, Building2, GraduationCap, Globe, Mic2, Camera, Music2 } from "lucide-react"

// ============================================================================
//  lucianomathias.com/sobre — SOBRE (autoridade completa)
//  → app/sobre/page.tsx
// ============================================================================

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
const PORTRAIT = `${BLOB}/B8%20MIRANTE%20-%20PLENA%CC%81RIA%20-%20%40bembemfilmes%20%2840%29-CBdqS2JbT3YRLDuRmwiUddgbBqSJ0Q.jpg`

const NAV = [
  ["AI Films", "/en/obra"],
  ["Courses & Mentoring", "/en/cursos/filmes-com-ia"],
  ["Photography", "/en/fotos"],
  ["Music", "/en/musica"],
  ["About", "/en/sobre"],
  ["Contact", "/en/contato"],
]

const CREDS = [
  { icon: Film, label: "Directing Brilhante (2026)", sub: "First 100% AI film for Brilhante/Unilever, with Google and Chay Suede — debut of the Harbor duo." },
  { icon: Building2, label: "Co-founder of Insula AI", sub: "More than 200 AI films and R$ 6 million in revenue in the segment." },
  { icon: GraduationCap, label: "Education & teaching", sub: (<>Certified in AI (DeepLearning.AI) and Web3 (University of Nicosia); course at <a href="https://lucianomathias.substack.com/p/curso-de-extensao-puc-sp-ia-na-pratica" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 transition hover:decoration-white">PUC-SP</a>, 2024.</>) },
  { icon: Globe, label: "International speaker", sub: "NFT NYC, Modular by Ripio, Metaverse Carnival (Hong Kong), Blockchain RJ, Cidade do Futuro, B8 Connect." },
  { icon: Mic2, label: "Media & industry", sub: (<>CNN, CBN, Valor, Estadão; columnist at <a href="https://olhardigital.com.br/author/luciano-mathias/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 transition hover:decoration-white">Olhar Digital</a> and <a href="https://br.beincrypto.com/profile/luciano-mathias/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 transition hover:decoration-white">BeInCrypto</a>.</>) },
  { icon: Music2, label: "Multimedia roots", sub: (<>Three studio albums and photo series exhibited at <a href="https://fotos.estadao.com.br/galerias/cultura,abertura-da-exposicao-art-lab-foto-2021-com-65-fotografos-artlab-gallery-nos-jardins,42648" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 transition hover:decoration-white">Art Lab Gallery</a>, 2021.</>) },
]

const MEDIA = [
  { outlet: "Meio & Mensagem", title: "Brilhante lança filme com Chay Suede feito 100% com IA", href: "https://www.meioemensagem.com.br/comunicacao/brilhante-lanca-filme-com-chay-suede-feito-100-com-ia" },
  { outlet: "Meio & Mensagem", title: "Sócios da Trio Hub lançam a Insula AI, selo focado no audiovisual", href: "https://www.meioemensagem.com.br/comunicacao/socios-da-trio-hub-lancam-a-insula-ai-selo-focado-no-audiovisual" },
  { outlet: "Roast Brief", title: "Insula AI apresenta sua direção de filmes com inteligência artificial", href: "https://roastbrief.us/insula-ia-announces-von-harbou/" },
  { outlet: "Clube de Criação", title: "Insula AI em destaque na Terça do Balde", href: "https://clubedecriacao.com.br/ultimas/terca-do-balde/" },
]

export default function Sobre() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/en" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "About" ? "text-white" : ""}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="border-b border-white/5 px-6 pb-12 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <a href="/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
              <ArrowLeft className="h-3.5 w-3.5" /> Home
            </a>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">About</p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
              Entrepreneur · Speaker · Creative
            </h1>
            <div className="mt-6 space-y-4 text-neutral-400">
              <p>
                Luciano Mathias is co-founder and partner at <span className="text-neutral-200">Insula AI</span>, a studio
                specialized in films made with artificial intelligence. Recognized as one of the pioneers of AI applied to
                audiovisual in Brazil, he has produced more than 200 AI films and surpassed R$ 6 million in revenue
                in the segment.
              </p>
              <p>
                Certified in AI by DeepLearning.AI and trained in Web3 at the University of Nicosia, he blends creative
                direction, business vision and technical mastery. In 2026, he directed <span className="text-neutral-200">Brilhante Perfume Extraordinário</span> —
                the first 100% AI film for Unilever, with Google and Chay Suede.
              </p>
              <p>
                Before the advent of AI came other languages: three studio albums as a musician and authorial photo
                series exhibited at <a href="https://fotos.estadao.com.br/galerias/cultura,abertura-da-exposicao-art-lab-foto-2021-com-65-fotografos-artlab-gallery-nos-jardins,42648" target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline decoration-white/30 underline-offset-4 transition hover:decoration-white">Art Lab Gallery</a> (2021) as a photographer. It is this multimedia journey that informs his
                creative language and aesthetic, expanding ever further through technology.
              </p>
            </div>
          </div>
          <img src={PORTRAIT} alt="Luciano Mathias" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* APRO — destaque */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-neutral-900 to-neutral-950 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-300">
                Shaping the market
              </span>
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug sm:text-3xl">
                Co-author of APRO's Best Practices Guide for AI.
              </h2>
              <p className="mt-3 text-neutral-400">
                He is part of the APRO working group behind the guide that is becoming a national reference for the use of AI in advertising audiovisual productions — copyright, licensing, liability and ethical use of technology. One of the guide's first articles is authored by Luciano.
              </p>
            </div>
            <a
              href="https://aproai.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium tracking-wide text-neutral-100 transition hover:border-white/60 hover:bg-white/5"
            >
              Discover APRO AI <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Track record</p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
            {CREDS.map((c) => (
              <div key={c.label} className="flex gap-4 bg-neutral-950/60 p-8">
                <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                <div>
                  <p className="text-sm font-medium text-neutral-100">{c.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Na mídia */}
          <div className="mt-16">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">In the media</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MEDIA.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-white/30 hover:bg-neutral-900"
                >
                  <div>
                    <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-200">
                      {m.outlet}
                    </span>
                    <p className="mt-4 text-lg font-light leading-snug text-white">{m.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-100 transition group-hover:gap-3">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/en/obra" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200">
              View the work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/en/contato" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-neutral-200 transition hover:border-white/40">
              Discuss a project
            </a>
          </div>
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
              <a key={label} href={href} className="transition hover:text-neutral-300">{label}</a>
            ))}
          </nav>
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Luciano Mathias</p>
        </div>
      </footer>
    </main>
  )
}
