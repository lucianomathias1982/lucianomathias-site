import { ArrowLeft, ArrowUpRight, Film, Building2, GraduationCap, Globe, Mic2, Camera, Music2 } from "lucide-react"

// ============================================================================
//  lucianomathias.com/sobre — SOBRE (autoridade completa)
//  → app/sobre/page.tsx
// ============================================================================

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
const PORTRAIT = `${BLOB}/B8%20MIRANTE%20-%20PLENA%CC%81RIA%20-%20%40bembemfilmes%20%2840%29-CBdqS2JbT3YRLDuRmwiUddgbBqSJ0Q.jpg`

const NAV = [
  ["AI Films", "/obra"],
  ["Cursos & Mentorias", "/cursos/filmes-com-ia"],
  ["Fotografia", "/fotos"],
  ["Música", "/musica"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
]

const CREDS = [
  { icon: Film, label: "Direção para marcas globais", sub: "Google como cliente; direção de campanhas para Unilever e KFC." },
  { icon: Building2, label: "Co-fundador da Insula AI", sub: "Produtora pioneira em filmes por IA — Brasil, México, Argentina e Estados Unidos." },
  { icon: GraduationCap, label: "Professor convidado da PUC-SP", sub: "Criou e ministrou o curso “IA na Prática” em 2024, pioneiro na educação formal sobre IA aplicada." },
  { icon: Globe, label: "Palestrante internacional", sub: "NFT NYC, Modular by Ripio, Metaverse Carnival (Hong Kong), Blockchain RJ, Cidade do Futuro, B8 Connect." },
  { icon: Mic2, label: "Presença na mídia", sub: "CNN, CBN, Valor, Estadão, Olhar Digital, BeInCrypto; embaixador da DappRadar na América Latina." },
  { icon: Camera, label: "Fotografia exposta", sub: "Séries autorais e exposição na Art Lab Gallery, 2021." },
]

export default function Sobre() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "Sobre" ? "text-white" : ""}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* INTRO */}
      <section className="border-b border-white/5 px-6 pb-12 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
              <ArrowLeft className="h-3.5 w-3.5" /> Início
            </a>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Sobre</p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
              Autor multimídia. Diretor.
            </h1>
            <div className="mt-6 space-y-4 text-neutral-400">
              <p>
                Há quase vinte anos Luciano Mathias dá forma a uma obra. Começou na música — compondo, arranjando e
                produzindo três discos do primeiro verso à mixagem. Depois veio a fotografia, com séries
                autorais expostas em galeria. Hoje, na direção de filmes com inteligência artificial.
              </p>
              <p>
                Não são três carreiras. É uma só prática em três mídias: a fotografia é o olhar, a música
                é a percepção, o filme com IA é onde os dois se encontram. É por isso que a direção tem
                assinatura — não fórmula.
              </p>
              <p>
                Hoje está à frente da <span className="text-neutral-200">Insula AI</span>, dirigindo para
                marcas globais e formando a próxima geração de criadores.
              </p>
            </div>
          </div>
          <img src={PORTRAIT} alt="Luciano Mathias" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>
      </section>

      {/* CREDENCIAIS */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Trajetória</p>
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

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/obra" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-neutral-200">
              Ver a obra <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/contato" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-neutral-200 transition hover:border-white/40">
              Falar sobre um projeto
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Empresário · Palestrante · Criativo · Artista multimídia · Insula AI</p>
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
