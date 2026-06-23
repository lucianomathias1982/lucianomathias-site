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
  { src: `${BLOB}/2-uiWyfpm8vwu0yZsKrUsRMAW2MgT7VR.jpg`, label: "Noções de IA" },
  { src: `${BLOB}/3-Rg04dErWvQSqG9tR393wnIxUFqT2GZ.jpg`, label: "Prompts para imagem" },
  { src: `${BLOB}/4-apDIiW0Xjq3XGI2fgp3GzPXwAsK7sI.jpg`, label: "Prompts personalizados" },
  { src: `${BLOB}/5-IkWCq4d1l1a215IiWUj7rA6Wo3mBYH.jpg`, label: "Animação (VEO3, Kling)" },
  { src: `${BLOB}/6-uVVOQXsT1mG8lfJ70GpHdhlVVqCKuQ.jpg`, label: "Criando imagens" },
  { src: `${BLOB}/7-CqfoXCeq8AlOmRBu0mURYFOyKJiWDW.jpg`, label: "Animando imagens" },
  { src: `${BLOB}/8-qRiYqfmlgVbXyti0SLqwob1ikr65HL.jpg`, label: "Formatos virais" },
  { src: `${BLOB}/9-7scgQivOamN9witYTTwS5m9wLjUrhb.jpg`, label: "Efeitos especiais" },
  { src: `${BLOB}/10-8ZvqQN7S5R7p6ydHAAZIXHSWeIK5NE.jpg`, label: "Voz com IA" },
  { src: `${BLOB}/11-FM4y2lWfJSdSfZuLJM5LcZb3bXmiLa.jpg`, label: "Edição" },
  { src: `${BLOB}/12-I8uguCOQTI7ikV4vDgPLGHLAD0wAED.jpg`, label: "Clones digitais" },
  { src: `${BLOB}/13-ZszXWKtjrtcHNSBvgJkyQaCvWQY6dQ.jpg`, label: "Clone HeyGen" },
  { src: `${BLOB}/14-tmoQJYjfuJ4xjYrIw6iH8MN5wAXbSa.jpg`, label: "Clones Hedra / Hailuo" },
  { src: `${BLOB}/15-jgmIUdOukrkkROfvTxy5Au5evXJEGv.jpg`, label: "Influencer digital" },
  { src: `${BLOB}/16-alCL9U2rL6nc6ZEl4SkCX9DDDplZGk.jpg`, label: "Consistência de personagens" },
  { src: `${BLOB}/17-cXnGxKmrzSaQFGFm8llySFYNaWiBGV.jpg`, label: "Realismo (Enhancor)" },
  { src: `${BLOB}/18-MOevYtBSbyKDtAiqPOCbRWAM2D71Mz.jpg`, label: "Animação de influencer" },
  { src: `${BLOB}/19-NohUsygaQIUmZkaQzOEarG2RD107pm.jpg`, label: "Finalização de vídeo" },
]

const FILMS = [
  { src: `${BLOB}/BulletSlow-SEDoHs3iI6B9QIRDX6NBbafmZRbjz1.mp4`, label: "Vídeos cinematográficos" },
  { src: `${BLOB}/Acttwo3-3Eqf7nVmvHJ2J2ysA068DI7ZUntygU.mp4`, label: "Animação com expressão e movimento" },
  { src: `${BLOB}/Bomba-qoW12ruxvPKp4SdsiIX4bYqsShNxxx.mp4`, label: "Efeitos especiais com IA" },
  { src: `${BLOB}/Cacador-uJkhLc9negazSr98X8RNqGq52a3Om3.mp4`, label: "Inserção de produtos em cena" },
  { src: `${BLOB}/Astronauta-H9YJ8hzMbp0a58JQhlW2h4SAHjEmxb.mp4`, label: "Conteúdo ilustrativo de alto engajamento" },
  { src: `${BLOB}/Acttwo2-zp9MQqrwzTQidSq3YKagIU2CCaqJiy.mp4`, label: "Diferentes estéticas e estilos" },
  { src: `${BLOB}/LUAndandoLeao4-ZChZiuViYcZ3DhO4isodUvrPERsxay.mp4`, label: "Você como ator principal da cena" },
  { src: `${BLOB}/Skate-9v9rXOB8tNMzaCJBdfg2kXS1u6LA3k.mp4`, label: "Cenas realistas, movimento real" },
  { src: `${BLOB}/LU_FX3-azeo2EJTRfDlxQPO8PS3h4VAzWHYLY.mp4`, label: "Formatos virais" },
]

const CURRICULUM = [
  {
    n: "01",
    title: "Fundamentos & Direção de prompt",
    items: ["Noções de IA aplicadas a vídeo", "Prompts inteligentes", "Prompts personalizados", "Prompts para imagem"],
  },
  {
    n: "02",
    title: "Imagem & estética",
    items: ["Criação de imagens com IA", "Consistência de personagens", "Realismo (Enhancor)", "Direção de arte e estilo"],
  },
  {
    n: "03",
    title: "Movimento & cena",
    items: ["Animação com VEO3 e Kling", "Animando imagens", "Efeitos especiais", "Cenas realistas"],
  },
  {
    n: "04",
    title: "Personagens, voz & clones",
    items: ["Clones digitais (HeyGen)", "Clones com Hedra / Hailuo", "Influencer digital", "Voz com IA"],
  },
  {
    n: "05",
    title: "Finalização & entrega",
    items: ["Edição e montagem", "Finalização de vídeo", "Formatos que circulam", "Pipeline de produção"],
  },
]

const AUTHORITY = [
  { icon: Film, label: "Direção para marcas globais", sub: "Google como cliente; direção de campanhas para Unilever e KFC" },
  { icon: Building2, label: "Co-fundador da Insula AI", sub: "Produtora pioneira em filmes por IA — Brasil, México, Argentina e EUA" },
  { icon: GraduationCap, label: "Professor convidado PUC-SP", sub: "Criou e ministrou o curso “IA na Prática” em 2024" },
  { icon: Globe, label: "Palestrante internacional", sub: "NFT NYC, Metaverse Carnival (Hong Kong), Blockchain RJ, B8 Connect" },
  { icon: Mic2, label: "Presença na mídia", sub: "CNN, CBN, Valor, Estadão, Olhar Digital, BeInCrypto" },
]

const BRANDS = ["Google", "Unilever", "KFC", "Insula AI", "PUC-SP"]

const FAQ = [
  ["Preciso ter experiência com IA ou edição de vídeo?", "Não. O curso começa do início e evolui até técnicas avançadas. O que muda aqui não é o nível de entrada — é o olhar com que você aprende a dirigir."],
  ["Preciso pagar pelas ferramentas?", "Várias têm versão gratuita para começar. Quando uma função avançada é paga, eu mostro o caminho e as alternativas gratuitas sempre que existem."],
  ["Como funciona o acesso?", "Acesso vitalício, no seu ritmo, em qualquer dispositivo, com todas as atualizações futuras incluídas — o campo muda rápido e o material acompanha."],
  ["Tem suporte?", "Sim, suporte por WhatsApp e comunidade para troca entre quem está produzindo de verdade."],
  ["As aulas são longas?", "Não. São objetivas, em média 10–15 minutos, pensadas para você aplicar logo depois de assistir."],
  ["Tem garantia?", "7 dias incondicionais. Se não fizer sentido para você, é só pedir o reembolso pelo suporte ou direto na Hotmart."],
]

function CTA({ children = "Começar agora", className = "" }: { children?: ReactNode; className?: string }) {
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
          <a href="/" className="font-serif text-sm tracking-wide text-neutral-100">Luciano Mathias</a>
          <a href={CHECKOUT} className="rounded-full bg-white px-5 py-2 text-xs font-medium tracking-wide text-black transition hover:bg-neutral-200">Quero o curso</a>
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

        <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Luciano Mathias · Insula AI
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-6xl">
            Você vai dirigir vídeos com IA com olhar de cinema — mesmo começando agora.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            O mesmo pipeline que uso dirigindo filmes para{" "}
            <span className="italic text-white">Google, Unilever e KFC</span>, destrinchado aula a aula — do roteiro à tela.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA />
            <a href="#a-obra" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white">
              <Play className="h-4 w-4" /> Ver os filmes
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
      <section id="a-obra" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">A obra</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              Isto foi feito com IA. Você vai aprender a dirigir assim.
            </h2>
            <p className="mt-4 text-neutral-400">
              Nada de teoria solta. Cada técnica do curso existe nestes frames — e você sai sabendo recriá-los.
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
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Quem te ensina</p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">Luciano Mathias</h2>
              <p className="mt-4 max-w-md text-neutral-400">
                Diretor e empreendedor à frente de uma das primeiras produtoras de filmes por IA do país, com
                trabalho para marcas globais e uma das vozes mais ativas sobre o uso criativo da IA no Brasil.
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
                <CTA>Aprender com o diretor</CTA>
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
                  ["4+", "Países de atuação"],
                  ["2024", "Curso na PUC-SP"],
                  ["7+", "Palcos internacionais"],
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
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Para quem é</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-light leading-tight sm:text-4xl">
            Para quem quer criar vídeo com craft — não só apertar botão.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Creators e criadores de conteúdo", "Quer subir o nível da própria produção e parar de soar amador."],
              ["Profissionais de marketing e audiovisual", "Quer entregar vídeo de marca em escala, com qualidade de estúdio."],
              ["Quem quer entrar no mercado", "Quer transformar a nova demanda de vídeo por IA em trabalho de verdade."],
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
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">O currículo</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              O pipeline completo de um filme por IA.
            </h2>
            <p className="mt-4 text-neutral-400">
              Da primeira ideia à entrega final, na ordem em que um diretor realmente trabalha.
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
                Mais de 19 aulas práticas, acesso vitalício e atualizações contínuas conforme novas ferramentas
                chegam ao mercado.
              </p>
              <div className="mt-6">
                <CTA>Ver a oferta</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- DENTRO DO CURSO */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Dentro do curso</p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
              Mais de 19 aulas, passo a passo, sem enrolação.
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
        <p className="mx-auto mt-4 max-w-6xl px-6 text-xs text-neutral-600">← arraste para o lado →</p>
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
            Uma ideia. Um prompt. Um filme pronto para vender.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- OFERTA */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Filmes com IA</p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-5xl">
            Comece a dirigir hoje.
          </h2>

          <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-900/50 p-10">
            <div className="mx-auto max-w-md space-y-3 text-left">
              {[
                "Curso completo — do zero ao pipeline de produção",
                "Bônus: agentes de roteiro e de prompts de imagem",
                "Comunidade exclusiva no WhatsApp + suporte",
                "Acesso vitalício com todas as atualizações",
              ].map((i) => (
                <p key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {i}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm text-neutral-500 line-through">De R$ 997</p>
              <p className="mt-1 font-serif text-4xl font-light text-white">
                R$ 397
              </p>
              <p className="mt-1 text-sm text-neutral-400">à vista no Pix ou em até 12x no cartão</p>
              <div className="mt-8">
                <CTA className="w-full sm:w-auto">Quero começar agora</CTA>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck className="h-4 w-4" /> Garantia incondicional de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- MENTORIA */}
      <section id="mentorias" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Mentorias</p>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl">
            Prefere acompanhamento direto comigo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Mentorias individuais para quem quer dirigir filmes com IA num nivel profissional — com direcao do seu projeto de perto e feedback direto. Vagas limitadas.
          </p>
          <a
            href="https://forms.gle/DBkerXi6XRvcTfcJ7"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium tracking-wide text-neutral-100 transition hover:border-white/50 hover:bg-white/5"
          >
            Quero uma mentoria <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="border-t border-white/5 bg-neutral-900/40 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light">Perguntas frequentes</h2>
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
            <p className="mt-1 text-xs">Filmes com IA · Insula AI</p>
          </div>
          <div className="flex gap-6">
            <a href="/" className="transition hover:text-neutral-300">Início</a>
            <a href="/obra" className="transition hover:text-neutral-300">Obra</a>
            <a href="/contato" className="transition hover:text-neutral-300">Contato</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Luciano Mathias</p>
        </div>
      </footer>
    </main>
  )
}
