import { ArrowLeft, Mail, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react"

// ============================================================================
//  lucianomathias.com/contato — CONTATO
//  → app/contato/page.tsx
//  AJUSTAR: trocar EMAIL e WHATSAPP pelos dados reais do Luciano.
// ============================================================================

const EMAIL = "luciano@insula-ai.com"

const NAV = [
  ["AI Films", "/es/obra"],
  ["Cursos y Mentorías", "/es/cursos/filmes-com-ia"],
  ["Fotografía", "/es/fotos"],
  ["Música", "/es/musica"],
  ["Acerca", "/es/sobre"],
  ["Contacto", "/es/contato"],
]

const SOCIALS = [
  { icon: Instagram, label: "Instagram", handle: "@lucianomathias", href: "https://instagram.com/lucianomathias" },
  { icon: Youtube, label: "YouTube", handle: "@lucianomathiasoficial", href: "https://youtube.com/@lucianomathiasoficial" },
  { icon: Linkedin, label: "LinkedIn", handle: "Luciano Mathias", href: "https://www.linkedin.com/in/lucianomathias" },
]

export default function Contato() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/es" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
          <nav className="hidden gap-7 text-xs uppercase tracking-widest text-neutral-400 md:flex">
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className={`transition hover:text-white ${label === "Contacto" ? "text-white" : ""}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="px-6 pb-10 pt-24">
        <div className="mx-auto max-w-6xl">
          <a href="/es" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 transition hover:text-neutral-300">
            <ArrowLeft className="h-3.5 w-3.5" /> Inicio
          </a>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Contacto</p>
              <h1 className="mt-4 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
                Hablemos.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-400">
                Dirección de películas con IA para marcas, agencias y proyectos propios. Cursos, charlas y
                colaboraciones. Cuéntame qué tienes en mente.
              </p>

              <div className="mt-10 space-y-4">
                <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/40 p-5 transition hover:border-white/30">
                  <Mail className="h-5 w-5 text-neutral-400" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Correo</p>
                    <p className="text-sm text-neutral-100">{EMAIL}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition group-hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Redes</p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-neutral-950/60 p-5 transition hover:bg-neutral-900/60">
                    <s.icon className="h-5 w-5 text-neutral-400" />
                    <div className="flex-1">
                      <p className="text-sm text-neutral-100">{s.label}</p>
                      <p className="text-xs text-neutral-500">{s.handle}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-neutral-500 transition group-hover:text-white" />
                  </a>
                ))}
              </div>
              <a href="https://insula-ai.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">
                Conoce Insula AI <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs text-neutral-500">Empresario · Conferencista · Creativo · Artista multimedia · Insula AI</p>
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
