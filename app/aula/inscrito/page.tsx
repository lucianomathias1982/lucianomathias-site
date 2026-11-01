import type { Metadata } from "next"
import InscritoConteudo from "./InscritoConteudo"

// Destino do redirecionamento do Hotmart Send depois da inscrição na aula.
export const metadata: Metadata = {
  title: "Inscrição confirmada | Luciano Mathias",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-neutral-100 antialiased">
      <header className="mx-auto max-w-6xl px-6 py-5">
        <a href="/" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
      </header>
      <section className="mx-auto max-w-2xl px-6 pb-20 pt-10 sm:pt-20">
        <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-white sm:text-8xl">
          Inscrição confirmada<span className="text-[#4ADE80]">.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-[1.6] text-neutral-300">
          Nos vemos na quarta, 18 de novembro, às 20h, ao vivo no YouTube. Ative o lembrete para não perder.
        </p>
        <InscritoConteudo />
      </section>
    </main>
  )
}
