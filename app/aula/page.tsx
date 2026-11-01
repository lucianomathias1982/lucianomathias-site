import type { Metadata } from "next"
import AulaConteudo from "./AulaConteudo"

// ============================================================================
//  Aula aberta de 18/11. O formulário vai para o Hotmart Send, que marca o contato
//  e redireciona para /aula/inscrito. A página muda sozinha para "ao vivo" e
//  "gravação" (datas em app/components/aula-config.ts).
// ============================================================================

const TITLE = "Aula aberta: sessão de direção ao vivo | Luciano Mathias"
const SUBTITLE = "Aula aberta e gratuita. Quarta, 18 de novembro, às 20h, ao vivo no YouTube."

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: TITLE,
    description: SUBTITLE,
    images: [{ url: "https://lucianomathias.com/media/posters/hero-kfc.jpg" }],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-neutral-100 antialiased">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <a href="/" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
      </header>
      <AulaConteudo />
      <footer className="border-t border-white/5 px-6 py-8">
        <p className="mx-auto max-w-6xl text-xs text-neutral-600">© {new Date().getFullYear()} Luciano Mathias</p>
      </footer>
    </main>
  )
}
