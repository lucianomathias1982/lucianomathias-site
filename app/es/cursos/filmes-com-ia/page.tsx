import type { ReactNode } from "react"
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Play,
  Globe,
  GraduationCap,
  Building2,
  Film,
  Mic2,
} from "lucide-react"

// ============================================================================
//  Luciano Mathias — "Filmes com IA"
//  Página reconstruída a partir do brand strategy: marca-mãe = Luciano Mathias,
//  posicionamento de diretor-fundador. Removidos: nome "CrIAtor 10x", a
//  linguagem de lançamento ("10x mais rápido/fácil/resultado"), a abertura pela
//  dor e os depoimentos falsos. Prova reconstruída sobre a OBRA real.
//  Stack: Next.js (App Router) + Tailwind + lucide-react. Cole como app/page.tsx.
// ============================================================================

const CHECKOUT = "https://pay.hotmart.com/J103796288R"
const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

const HERO_VIDEO = `${BLOB}/LUAndandoLeao4-ZChZiuViYcZ3DhO4isodUvrPERsxay.mp4`
const BAND_VIDEO = `${BLOB}/LU_FX3-azeo2EJTRfDlxQPO8PS3h4VAzWHYLY.mp4`
const INSTRUCTOR_IMG = `${BLOB}/B8%20MIRANTE%20-%20PLENA%CC%81RIA%20-%20%40bembemfilmes%20%2840%29-CBdqS2JbT3YRLDuRmwiUddgbBqSJ0Q.jpg`

// Screenshots reais dos módulos (mantidos do site original, agora como galeria)
const MODULE_SHOTS = [
  { src: `${BLOB}/1-F9RgV8Y8F3CslFPTKYRnpzylYdMqH2.jpg`, label: "Prompts inteligentes" },
  { src: `${BLOB}/2-uiWyfpm8vwu0yZsKrUsRMAW2MgT7VR.jpg`, label: "Nociones de IA" },
  { src: `${BLOB}/3-Rg04dErWvQSqG9tR393wnIxUFqT2GZ.jpg`, label: "Prompts para imagen" },
  { src: `${BLOB}/4-apDIiW0Xjq3XGI2fgp3GzPXwAsK7sI.jpg`, label: "Prompts personalizados" },
  { src: `${BLOB}/5-IkWCq4d1l1a215IiWUj7rA6Wo3mBYH.jpg`, label: "Animación (VEO3, Kling)" },
  { src: `${BLOB}/6-uVVOQXsT1mG8lfJ70GpHdhlVVqCKuQ.jpg`, label: "Creando imágenes" },
  { src: `${BLOB}/7-CqfoXCeq8AlOmRBu0mURYFOyKJiWDW.jpg`, label: "Animando imágenes" },
  { src: `${BLOB}/8-qRiYqfmlgVbXyti0SLqwob1ikr65HL.jpg`, label: "Formatos virales" },
  { src: `${BLOB}/9-7scgQivOamN9witYTTwS5m9wLjUrhb.jpg`, label: "Efectos especiales" },
  { src: `${BLOB}/10-8ZvqQN7S5R7p6ydHAAZIXHSWeIK5NE.jpg`, label: "Voz con IA" },
  { src: `${BLOB}/11-FM4y2lWfJSdSfZuLJM5LcZb3bXmiLa.jpg`, label: "Edición" },
  { src: `${BLOB}/12-I8uguCOQTI7ikV4vDgPLGHLAD0wAED.jpg`, label: "Clones digitales" },
  { src: `${BLOB}/13-ZszXWKtjrtcHNSBvgJkyQaCvWQY6dQ.jpg`, label: "Clon HeyGen" },
  { src: `${BLOB}/14-tmoQJYjfuJ4xjYrIw6iH8MN5wAXbSa.jpg`, label: "Clones Hedra / Hailuo" },
  { src: `${BLOB}/15-jgmIUdOukrkkROfvTxy5Au5evXJEGv.jpg`, label: "Influencer digital" },
  { src: `${BLOB}/16-alCL9U2rL6nc6ZEl4SkCX9DDDplZGk.jpg`, label: "Consistencia de personajes" },
  { src: `${BLOB}/17-cXnGxKmrzSaQFGFm8llySFYNaWiBGV.jpg`, label: "Realismo (Enhancor)" },
  { src: `${BLOB}/18-MOevYtBSbyKDtAiqPOCbRWAM2D71Mz.jpg`, label: "Animación de influencer" },
  { src: `${BLOB}/19-NohUsygaQIUmZkaQzOEarG2RD107pm.jpg`, label: "Finalización de video" },
]

const FILMS = [
  { src: `${BLOB}/BulletSlow-SEDoHs3iI6B9QIRDX6NBbafmZRbjz1.mp4`, label: "Videos cinematográficos" },
  { src: `${BLOB}/Acttwo3-3Eqf7nVmvHJ2J2ysA068DI7ZUntygU.mp4`, label: "Animación con expresión y movimiento" },
  { src: `${BLOB}/Bomba-qoW12ruxvPKp4SdsiIX4bYqsShNxxx.mp4`, label: "Efectos especiales con IA" },
  { src: `${BLOB}/Cacador-uJkhLc9negazSr98X8RNqGq52a3Om3.mp4`, label: "Inserción de productos en escena" },
  { src: `${BLOB}/Astronauta-H9YJ8hzMbp0a58JQhlW2h4SAHjEmxb.mp4`, label: "Contenido ilustrativo de alto engagement" },
  { src: `${BLOB}/Acttwo2-zp9MQqrwzTQidSq3YKagIU2CCaqJiy.mp4`, label: "Diferentes estéticas y estilos" },
  { src: `${BLOB}/LUAndandoLeao4-ZChZiuViYcZ3DhO4isodUvrPERsxay.mp4`, label: "Tú como actor principal de la escena" },
  { src: `${BLOB}/Skate-9v9rXOB8tNMzaCJBdfg2kXS1u6LA3k.mp4`, label: "Escenas realistas, movimiento real" },
  { src: `${BLOB}/LU_FX3-azeo2EJTRfDlxQPO8PS3h4VAzWHYLY.mp4`, label: "Formatos virales" },
]

const CURRICULUM = [
  {
    n: "01",
    title: "Fundamentos y dirección de prompt",
    items: ["Nociones de IA aplicadas a video", "Prompts inteligentes", "Prompts personalizados", "Prompts para imagen"],
  },
  {
    n: "02",
    title: "Imagen y estética",
    items: ["Creación de imágenes con IA", "Consistencia de personajes", "Realismo (Enhancor)", "Dirección de arte y estilo"],
  },
  {
    n: "03",
    title: "Movimiento y escena",
    items: ["Animación con VEO3 y Kling", "Animando imágenes", "Efectos especiales", "Escenas realistas"],
  },
  {
    n: "04",
    title: "Personajes, voz y clones",
    items: ["Clones digitales (HeyGen)", "Clones con Hedra / Hailuo", "Influencer digital", "Voz con IA"],
  },
  {
    n: "05",
    title: "Finalización y entrega",
    items: ["Edición y montaje", "Finalización de video", "Formatos que circulan", "Pipeline de producción"],
  },
]

const AUTHORITY = [
  { icon: Film, label: "Dirección para marcas globales", sub: "Google como cliente; dirección de campañas para Unilever y KFC" },
  { icon: Building2, label: "Cofundador de Insula AI", sub: "Productora pionera en películas con IA — Brasil, México, Argentina y EE. UU." },
  { icon: GraduationCap, label: "Profesor invitado PUC-SP", sub: "Creó e impartió el curso “IA en la Práctica” en 2024" },
  { icon: Globe, label: "Conferencista internacional", sub: "NFT NYC, Metaverse Carnival (Hong Kong), Blockchain RJ, B8 Connect" },
  { icon: Mic2, label: "Presencia en los medios", sub: "CNN, CBN, Valor, Estadão, Olhar Digital, BeInCrypto" },
]

const BRANDS = ["Google", "Unilever", "KFC", "Insula AI", "PUC-SP"]

const FAQ = [
  ["¿Necesito experiencia con IA o edición de video?", "No. El curso empieza desde cero y avanza hasta técnicas avanzadas. Lo que cambia aquí no es el nivel de entrada — es la mirada con la que aprendes a dirigir."],
  ["¿Necesito pagar por las herramientas?", "Varias tienen versión gratuita para empezar. Cuando una función avanzada es de pago, el curso muestra el camino y las alternativas gratuitas siempre que existen."],
  ["¿Cómo funciona el acceso?", "Acceso de por vida, a tu ritmo, en cualquier dispositivo, con todas las actualizaciones futuras incluidas — el campo cambia rápido y el material se mantiene al día."],
  ["¿Hay soporte?", "Sí, soporte por WhatsApp y comunidad para intercambiar entre quienes están produciendo de verdad."],
  ["¿Las clases son largas?", "No. Son concretas, de 10–15 minutos en promedio, pensadas para que las apliques justo después de verlas."],
  ["¿Hay garantía?", "7 días incondicionales. Si no tiene sentido para ti, basta con pedir el reembolso por soporte o directamente en Hotmart."],
]

function CTA({ children = "Empezar ahora", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* ---------------------------------------------------------------- HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/es" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
          <a href={CHECKOUT} className="rounded-full bg-white px-5 py-2 text-xs font-medium tracking-wide text-black transition hover:bg-neutral-200">Quiero el curso</a>
        </div>
      </header>

      {/* ----------------------------------------------------------------- HERO */}
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

        <div className="mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 py-16">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Luciano Mathias · Insula AI
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Vas a dirigir videos con IA con mirada de cine — incluso empezando ahora.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            El mismo pipeline que Luciano usa dirigiendo películas para{" "}
            <span className="italic text-white">Google, Unilever y KFC</span>, desglosado clase a clase — del guion a la pantalla.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA />
            <a href="#a-obra" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white">
              <Play className="h-4 w-4" /> Ver las películas
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
      {/* --------------------------------------------------- MENTORIA (destaque) */}
      <section id="mentorias" className="px-6 py-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-neutral-900 to-neutral-950 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-300">
                Mentorías · plazas limitadas
              </span>
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug sm:text-3xl">
                Mentoría individual o en grupo para tu proyecto con Luciano Mathias.
              </h2>
              <p className="mt-3 text-neutral-400">
                Acompañamiento personalizado para dirigir películas con IA a nivel profesional — del concepto a la entrega, con la visión de quien firma proyectos para marcas globales.
              </p>
            </div>
            <a
              href="https://forms.gle/DBkerXi6XRvcTfcJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
            >
              Quiero una mentoría <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section id="a-obra" className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">La obra</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              Esto fue hecho con IA. Vas a aprender a dirigir así.
            </h2>
            <p className="mt-4 text-neutral-400">
              Nada de teoría suelta. Cada técnica del curso existe en estos frames — y sales sabiendo recrearlos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {FILMS.map((f) => (
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

      {/* --------------------------------------------------------- QUEM ENSINA */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Quién te enseña</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">Luciano Mathias</h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Director y emprendedor al frente de una de las primeras productoras de películas con IA del país, con
                trabajo para marcas globales y una de las voces más activas sobre el uso creativo de la IA en Brasil.
              </p>

              <div className="mt-8 grid gap-5">
                {AUTHORITY.map((a) => (
                  <div key={a.label} className="flex gap-4">
                    <a.icon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-400" />
                    <div>
                      <p className="text-sm font-medium text-neutral-100">{a.label}</p>
                      <p className="text-sm text-neutral-500">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <CTA>Aprender con el director</CTA>
              </div>
            </div>

            <div className="relative">
              <img
                src={INSTRUCTOR_IMG}
                alt="Luciano Mathias em plenária"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-5 left-6 right-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center backdrop-blur">
                {[
                  ["4+", "Países de actuación"],
                  ["2024", "Curso en la PUC-SP"],
                  ["7+", "Escenarios internacionales"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-neutral-950/60 px-3 py-4">
                    <p className="font-serif text-2xl font-light text-white">{n}</p>
                    <p className="mt-1 text-[11px] leading-tight text-neutral-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- PARA QUEM É */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Para quién es</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight sm:text-4xl">
            Para quien quiere crear video con craft — no solo apretar un botón.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Creators y creadores de contenido", "Quiere subir el nivel de su propia producción y dejar de sonar amateur."],
              ["Profesionales de marketing y audiovisual", "Quiere entregar video de marca a escala, con calidad de estudio."],
              ["Quien quiere entrar al mercado", "Quiere transformar la nueva demanda de video por IA en trabajo de verdad."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
                <h3 className="text-base font-medium">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- O QUE DOMINA */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">El currículo</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              El pipeline completo de una película con IA.
            </h2>
            <p className="mt-4 text-neutral-400">
              De la primera idea a la entrega final, en el orden en que un director realmente trabaja.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
            {CURRICULUM.map((m) => (
              <div key={m.n} className="bg-neutral-950/60 p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl font-light text-neutral-600">{m.n}</span>
                  <h3 className="text-lg font-medium">{m.title}</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col justify-center bg-neutral-950/60 p-8">
              <p className="text-sm leading-relaxed text-neutral-400">
                Más de 19 clases prácticas, acceso de por vida y actualizaciones continuas a medida que nuevas herramientas
                llegan al mercado.
              </p>
              <div className="mt-6">
                <CTA>Ver la oferta</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- DENTRO DO CURSO */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Dentro del curso</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              Más de 19 clases, paso a paso, sin rodeos.
            </h2>
          </div>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MODULE_SHOTS.map((m, i) => (
            <figure
              key={m.src}
              className="group relative w-[230px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
            >
              <img
                src={m.src}
                alt={m.label}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="flex items-center gap-2 p-3 text-xs text-neutral-300">
                <span className="font-mono text-neutral-600">{String(i + 1).padStart(2, "0")}</span>
                {m.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-6xl px-6 text-xs text-neutral-600">← desliza hacia el lado →</p>
      </section>

      {/* ---------------------------------------------------- FAIXA DE MOVIMENTO */}
      <section className="relative isolate flex h-[44vh] items-center overflow-hidden border-t border-white/5">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          src={BAND_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-neutral-950/60" />
        <div className="mx-auto max-w-6xl px-6">
          <p className="max-w-xl font-serif text-2xl font-light leading-snug sm:text-3xl">
            Una idea. Un prompt. Una película lista para vender.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- OFERTA */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Películas con IA</p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-5xl">
            Empieza a dirigir hoy.
          </h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-900/50 p-10">
            <div className="mx-auto max-w-md space-y-3 text-left">
              {[
                "Curso completo — de cero al pipeline de producción",
                "Bonus: agentes de guion y de prompts de imagen",
                "Comunidad exclusiva en WhatsApp + soporte",
                "Acceso de por vida con todas las actualizaciones",
              ].map((i) => (
                <p key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {i}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm text-neutral-500 line-through">Antes R$ 997</p>
              <p className="mt-1 font-serif text-4xl font-light text-white">
                R$ 497
              </p>
              <p className="mt-1 text-sm text-neutral-400">al contado por Pix o hasta en 12 cuotas con tarjeta</p>
              <div className="mt-8">
                <CTA className="w-full sm:w-auto">Quiero empezar ahora</CTA>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck className="h-4 w-4" /> Garantía incondicional de 7 días
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Preguntas frecuentes</h2>
          <div className="mt-10 divide-y divide-white/10">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-neutral-100">
                  {q}
                  <span className="text-neutral-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/5 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-neutral-500 sm:flex-row">
          <div>
            <p className="font-serif text-lg font-light text-neutral-200">Luciano Mathias</p>
            <p className="mt-1 text-xs">Películas con IA · Insula AI</p>
          </div>
          <div className="flex gap-6">
            <a href="/es" className="transition hover:text-neutral-300">Inicio</a>
            <a href="/es/obra" className="transition hover:text-neutral-300">Obra</a>
            <a href="/es/contato" className="transition hover:text-neutral-300">Contacto</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Luciano Mathias</p>
        </div>
      </footer>
    </main>
  )
}
