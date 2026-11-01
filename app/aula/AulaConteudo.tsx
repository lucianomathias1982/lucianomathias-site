"use client"

import { ArrowRight, Play } from "lucide-react"
import AulaForm from "./AulaForm"
import { EMAIL_FILME, YOUTUBE_LIVE } from "../components/aula-config"
import { useBonusNovembro, useFaseAula } from "../components/useAula"
import { TurmaNovembroLinha } from "../components/TurmaNovembro"

const TITULO = "font-display text-6xl leading-[0.95] tracking-wide text-white sm:text-8xl"
const BOTAO =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
const CURSO = "/cursos/filmes-com-ia"

const ETAPAS = [
  "Decupo um filme ao vivo, da ideia à lista de planos, antes de abrir qualquer ferramenta.",
  "Mostro as decisões de direção por trás de um dos filmes selecionados no AI Film Awards Brasil 2026.",
  "Reviso filmes feitos com IA ao vivo: história, continuidade e ritmo. Quem quiser pode enviar o seu.",
  "Respondo às perguntas e explico como funciona o curso Filmes com IA.",
]

function LinkCurso({ texto }: { texto: string }) {
  return (
    <a
      href={CURSO}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-neutral-300 transition hover:border-white/20 hover:text-white"
    >
      {texto}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function Inscricao() {
  return (
    <>
      <section className="mx-auto max-w-2xl px-6 pb-14 pt-8 sm:pt-16">
        <h1 className={TITULO}>
          Sessão de direção ao vivo<span className="text-[#4ADE80]">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-[1.6] text-neutral-300">
          Aula aberta e gratuita. Quarta, 18 de novembro, às 20h, ao vivo no YouTube.
        </p>
        <div className="mt-8 max-w-md">
          <AulaForm />
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-14">
        <h2 className="font-display text-4xl tracking-wide text-white">Como será a sessão</h2>
        <ol className="mt-6 space-y-4">
          {ETAPAS.map((e, i) => (
            <li key={e} className="flex items-start gap-4 text-base leading-relaxed text-neutral-300">
              <span className="font-display text-2xl leading-none text-[#4ADE80]">{i + 1}</span>
              {e}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-2xl space-y-6 px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium text-neutral-100">Quer que o seu filme seja revisado?</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            Mande o link por e-mail antes da aula. Alguns serão comentados ao vivo.
          </p>
          <a href={EMAIL_FILME} className="mt-3 inline-block text-sm font-medium text-[#4ADE80] underline-offset-2 hover:underline">
            suporte@lucianomathias.com
          </a>
        </div>
        <p className="text-sm text-neutral-400">Mais de R$ 8 milhões em filmes feitos com IA.</p>
        <LinkCurso texto="Conheça o curso Filmes com IA" />
      </section>
    </>
  )
}

function AoVivo() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-16 sm:pt-28">
      <h1 className={TITULO}>
        Estamos ao vivo agora<span className="text-[#4ADE80]">.</span>
      </h1>
      <a href={YOUTUBE_LIVE} target="_blank" rel="noopener noreferrer" className={`${BOTAO} mt-10`}>
        <Play className="h-4 w-4" /> Assistir no YouTube
      </a>
    </section>
  )
}

function Gravacao() {
  const bonus = useBonusNovembro()
  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-16 sm:pt-28">
      <h1 className={TITULO}>
        A sessão aconteceu em 18 de novembro<span className="text-[#4ADE80]">.</span>
      </h1>
      {bonus && <p className="mt-6 text-base text-neutral-400">A gravação fica disponível no canal até domingo, 22/11.</p>}
      <a href={YOUTUBE_LIVE} target="_blank" rel="noopener noreferrer" className={`${BOTAO} mt-10`}>
        <Play className="h-4 w-4" /> Assistir à gravação
      </a>
      <TurmaNovembroLinha />
      <div className="mt-10">
        <LinkCurso texto="Conhecer o curso Filmes com IA" />
      </div>
    </section>
  )
}

export default function AulaConteudo() {
  const fase = useFaseAula()
  if (fase === "ao-vivo") return <AoVivo />
  if (fase === "gravacao") return <Gravacao />
  return <Inscricao />
}
