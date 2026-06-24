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
  { src: `${BLOB}/1-F9RgV8Y8F3CslFPTKYRnpzylYdMqH2.jpg`, label: "Smart prompts" },
  { src: `${BLOB}/2-uiWyfpm8vwu0yZsKrUsRMAW2MgT7VR.jpg`, label: "AI basics" },
  { src: `${BLOB}/3-Rg04dErWvQSqG9tR393wnIxUFqT2GZ.jpg`, label: "Image prompts" },
  { src: `${BLOB}/4-apDIiW0Xjq3XGI2fgp3GzPXwAsK7sI.jpg`, label: "Custom prompts" },
  { src: `${BLOB}/5-IkWCq4d1l1a215IiWUj7rA6Wo3mBYH.jpg`, label: "Animation (VEO3, Kling)" },
  { src: `${BLOB}/6-uVVOQXsT1mG8lfJ70GpHdhlVVqCKuQ.jpg`, label: "Creating images" },
  { src: `${BLOB}/7-CqfoXCeq8AlOmRBu0mURYFOyKJiWDW.jpg`, label: "Animating images" },
  { src: `${BLOB}/8-qRiYqfmlgVbXyti0SLqwob1ikr65HL.jpg`, label: "Viral formats" },
  { src: `${BLOB}/9-7scgQivOamN9witYTTwS5m9wLjUrhb.jpg`, label: "Special effects" },
  { src: `${BLOB}/10-8ZvqQN7S5R7p6ydHAAZIXHSWeIK5NE.jpg`, label: "AI voice" },
  { src: `${BLOB}/11-FM4y2lWfJSdSfZuLJM5LcZb3bXmiLa.jpg`, label: "Editing" },
  { src: `${BLOB}/12-I8uguCOQTI7ikV4vDgPLGHLAD0wAED.jpg`, label: "Digital clones" },
  { src: `${BLOB}/13-ZszXWKtjrtcHNSBvgJkyQaCvWQY6dQ.jpg`, label: "HeyGen clone" },
  { src: `${BLOB}/14-tmoQJYjfuJ4xjYrIw6iH8MN5wAXbSa.jpg`, label: "Hedra / Hailuo clones" },
  { src: `${BLOB}/15-jgmIUdOukrkkROfvTxy5Au5evXJEGv.jpg`, label: "Digital influencer" },
  { src: `${BLOB}/16-alCL9U2rL6nc6ZEl4SkCX9DDDplZGk.jpg`, label: "Character consistency" },
  { src: `${BLOB}/17-cXnGxKmrzSaQFGFm8llySFYNaWiBGV.jpg`, label: "Realism (Enhancor)" },
  { src: `${BLOB}/18-MOevYtBSbyKDtAiqPOCbRWAM2D71Mz.jpg`, label: "Influencer animation" },
  { src: `${BLOB}/19-NohUsygaQIUmZkaQzOEarG2RD107pm.jpg`, label: "Video finishing" },
]

const FILMS = [
  { src: `${BLOB}/BulletSlow-SEDoHs3iI6B9QIRDX6NBbafmZRbjz1.mp4`, label: "Cinematic videos" },
  { src: `${BLOB}/Acttwo3-3Eqf7nVmvHJ2J2ysA068DI7ZUntygU.mp4`, label: "Animation with expression and movement" },
  { src: `${BLOB}/Bomba-qoW12ruxvPKp4SdsiIX4bYqsShNxxx.mp4`, label: "Special effects with AI" },
  { src: `${BLOB}/Cacador-uJkhLc9negazSr98X8RNqGq52a3Om3.mp4`, label: "Product placement in scene" },
  { src: `${BLOB}/Astronauta-H9YJ8hzMbp0a58JQhlW2h4SAHjEmxb.mp4`, label: "High-engagement illustrative content" },
  { src: `${BLOB}/Acttwo2-zp9MQqrwzTQidSq3YKagIU2CCaqJiy.mp4`, label: "Different aesthetics and styles" },
  { src: `${BLOB}/LUAndandoLeao4-ZChZiuViYcZ3DhO4isodUvrPERsxay.mp4`, label: "You as the lead actor of the scene" },
  { src: `${BLOB}/Skate-9v9rXOB8tNMzaCJBdfg2kXS1u6LA3k.mp4`, label: "Realistic scenes, real movement" },
  { src: `${BLOB}/LU_FX3-azeo2EJTRfDlxQPO8PS3h4VAzWHYLY.mp4`, label: "Viral formats" },
]

const CURRICULUM = [
  {
    n: "01",
    title: "Fundamentals & prompt direction",
    items: ["AI basics applied to video", "Smart prompts", "Custom prompts", "Image prompts"],
  },
  {
    n: "02",
    title: "Image & aesthetics",
    items: ["Creating images with AI", "Character consistency", "Realism (Enhancor)", "Art direction and style"],
  },
  {
    n: "03",
    title: "Movement & scene",
    items: ["Animation with VEO3 and Kling", "Animating images", "Special effects", "Realistic scenes"],
  },
  {
    n: "04",
    title: "Characters, voice & clones",
    items: ["Digital clones (HeyGen)", "Clones with Hedra / Hailuo", "Digital influencer", "AI voice"],
  },
  {
    n: "05",
    title: "Finishing & delivery",
    items: ["Editing and assembly", "Video finishing", "Formats that circulate", "Production pipeline"],
  },
]

const AUTHORITY = [
  { icon: Film, label: "Directing for global brands", sub: "Google as a client; campaign direction for Unilever and KFC" },
  { icon: Building2, label: "Co-founder of Insula AI", sub: "Pioneering AI film studio — Brazil, Mexico, Argentina and the USA" },
  { icon: GraduationCap, label: "Guest professor PUC-SP", sub: "Created and taught the “AI in Practice” course in 2024" },
  { icon: Globe, label: "International speaker", sub: "NFT NYC, Metaverse Carnival (Hong Kong), Blockchain RJ, B8 Connect" },
  { icon: Mic2, label: "Media presence", sub: "CNN, CBN, Valor, Estadão, Olhar Digital, BeInCrypto" },
]

const BRANDS = ["Google", "Unilever", "KFC", "Insula AI", "PUC-SP"]

const FAQ = [
  ["Do I need experience with AI or video editing?", "No. The course starts from scratch and builds up to advanced techniques. What changes here isn't the entry level — it's the eye with which you learn to direct."],
  ["Do I need to pay for the tools?", "Many have a free version to start. When an advanced feature is paid, the course shows the path and free alternatives whenever they exist."],
  ["How does access work?", "Lifetime access, at your own pace, on any device, with all future updates included — the field moves fast and the material keeps up."],
  ["Is there support?", "Yes — WhatsApp support and a community for exchange among people who are actually producing."],
  ["Are the lessons long?", "No. They're objective, 10–15 minutes on average, designed so you can apply them right after watching."],
  ["Is there a guarantee?", "7 unconditional days. If it doesn't make sense for you, just request a refund through support or directly on Hotmart."],
]

function CTA({ children = "Start now", className = "" }: { children?: ReactNode; className?: string }) {
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
          <a href="/en" className="text-xs font-medium uppercase tracking-widest text-neutral-100">Luciano Mathias</a>
          <a href={CHECKOUT} className="rounded-full bg-white px-5 py-2 text-xs font-medium tracking-wide text-black transition hover:bg-neutral-200">I want the course</a>
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
            You'll direct AI videos with a cinematic eye — even starting from scratch.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            The same pipeline Luciano uses to direct films for{" "}
            <span className="italic text-white">Google, Unilever and KFC</span>, broken down lesson by lesson — from script to screen.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA />
            <a href="#a-obra" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white">
              <Play className="h-4 w-4" /> See the films
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
                Mentoring · limited spots
              </span>
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug sm:text-3xl">
                One-on-one or group mentoring for your project with Luciano Mathias.
              </h2>
              <p className="mt-3 text-neutral-400">
                Personalized guidance to direct AI films at a professional level — from concept to delivery, with the vision of someone who signs projects for global brands.
              </p>
            </div>
            <a
              href="https://forms.gle/DBkerXi6XRvcTfcJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
            >
              I want mentoring <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section id="a-obra" className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">The work</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              This was made with AI. You'll learn to direct like this.
            </h2>
            <p className="mt-4 text-neutral-400">
              No loose theory. Every technique in the course lives in these frames — and you'll leave knowing how to recreate them.
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
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Who teaches you</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">Luciano Mathias</h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Director and entrepreneur leading one of the country's first AI film studios, with
                work for global brands and one of the most active voices on the creative use of AI in Brazil.
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
                <CTA>Learn from the director</CTA>
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
                  ["4+", "Countries of operation"],
                  ["2024", "Course at PUC-SP"],
                  ["7+", "International stages"],
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
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Who it's for</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight sm:text-4xl">
            For those who want to create video with craft — not just push a button.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Creators and content makers", "Want to raise the level of their own production and stop sounding amateur."],
              ["Marketing and audiovisual professionals", "Want to deliver brand video at scale, with studio quality."],
              ["Those entering the market", "Want to turn the new demand for AI video into real work."],
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
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">The curriculum</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              The full pipeline of an AI film.
            </h2>
            <p className="mt-4 text-neutral-400">
              From the first idea to final delivery, in the order a director actually works.
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
                More than 19 practical lessons, lifetime access and continuous updates as new tools
                reach the market.
              </p>
              <div className="mt-6">
                <CTA>See the offer</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- DENTRO DO CURSO */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Inside the course</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              More than 19 lessons, step by step, no fluff.
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
        <p className="mx-auto mt-4 max-w-6xl px-6 text-xs text-neutral-600">← swipe sideways →</p>
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
            One idea. One prompt. A film ready to sell.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- OFERTA */}
      <section className="border-t border-white/5 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">AI films</p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-5xl">
            Start directing today.
          </h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-900/50 p-10">
            <div className="mx-auto max-w-md space-y-3 text-left">
              {[
                "Complete course — from zero to production pipeline",
                "Bonus: script and image-prompt agents",
                "Exclusive WhatsApp community + support",
                "Lifetime access with all updates",
              ].map((i) => (
                <p key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {i}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm text-neutral-500 line-through">From R$ 997</p>
              <p className="mt-1 font-serif text-4xl font-light text-white">
                R$ 497
              </p>
              <p className="mt-1 text-sm text-neutral-400">in full via Pix or up to 12× by card</p>
              <div className="mt-8">
                <CTA className="w-full sm:w-auto">I want to start now</CTA>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck className="h-4 w-4" /> Unconditional 7-day guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Frequently asked questions</h2>
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
            <p className="mt-1 text-xs">AI films · Insula AI</p>
          </div>
          <div className="flex gap-6">
            <a href="/en" className="transition hover:text-neutral-300">Home</a>
            <a href="/en/obra" className="transition hover:text-neutral-300">AI Films</a>
            <a href="/en/contato" className="transition hover:text-neutral-300">Contact</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Luciano Mathias</p>
        </div>
      </footer>
    </main>
  )
}
