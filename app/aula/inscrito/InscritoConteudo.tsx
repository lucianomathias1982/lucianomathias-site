"use client"

import { useEffect, useRef } from "react"
import { CalendarPlus, Youtube } from "lucide-react"
import { metaEvent, type DadosPessoa } from "../../meta-events"
import { YOUTUBE_LIVE, agendaGoogleUrl } from "../../components/aula-config"

export default function InscritoConteudo() {
  // Lead só para quem acabou de enviar o formulário: recarregar ou abrir o link direto não conta.
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    let pessoa: DadosPessoa | null = null
    try {
      pessoa = JSON.parse(sessionStorage.getItem("lm_pessoa_aula") || "null")
      sessionStorage.removeItem("lm_pessoa_aula")
    } catch {}
    if (pessoa) metaEvent("Lead", { content_name: "Aula aberta 18/11" }, pessoa)
  }, [])

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href={YOUTUBE_LIVE}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => metaEvent("LembreteAula")}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
      >
        <Youtube className="h-4 w-4" /> Ativar o lembrete no YouTube
      </a>
      <a
        href={agendaGoogleUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => metaEvent("AgendaAula")}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium tracking-wide text-neutral-100 transition hover:border-white/40"
      >
        <CalendarPlus className="h-4 w-4" /> Adicionar à minha agenda
      </a>
    </div>
  )
}
