// Aula aberta de 18/11: datas e links num lugar só. Horários de Brasília.
export const LIVE_START = Date.parse("2026-11-18T20:00:00-03:00")
export const LIVE_END = Date.parse("2026-11-18T21:30:00-03:00")
// O bônus vale até domingo, 22/11, às 23h59.
export const BONUS_END = Date.parse("2026-11-23T00:00:00-03:00")

// A mesma URL serve para o lembrete, a transmissão e a gravação.
export const YOUTUBE_LIVE = "https://www.youtube.com/watch?v=oMuDvwljhcA"
export const PAGINA_AULA = "https://lucianomathias.com/aula"
export const EMAIL_FILME = `mailto:suporte@lucianomathias.com?subject=${encodeURIComponent("Filme para a sessão de 18/11")}`

export type FaseAula = "inscricao" | "ao-vivo" | "gravacao"

export function faseAula(agora: number = Date.now()): FaseAula {
  if (agora < LIVE_START) return "inscricao"
  return agora < LIVE_END ? "ao-vivo" : "gravacao"
}

export function bonusAberto(agora: number = Date.now()) {
  return agora < BONUS_END
}

export function agendaGoogleUrl() {
  const detalhes = `Sessão de direção ao vivo com Luciano Mathias.\n\nTransmissão: ${YOUTUBE_LIVE}\nPágina da aula: ${PAGINA_AULA}`
  return (
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent("Aula aberta: sessão de direção ao vivo")}` +
    "&dates=20261118T230000Z/20261119T003000Z" +
    `&details=${encodeURIComponent(detalhes)}` +
    `&location=${encodeURIComponent("YouTube")}`
  )
}
