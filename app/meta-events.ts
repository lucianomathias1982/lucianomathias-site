// Eventos do Meta: cada um sai pelo pixel (navegador) e pela API de Conversões
// (servidor, app/api/meta-capi) com o mesmo event_id, para a Meta deduplicar.
export const PIXEL_ID = "764591366148652"

// Eventos padrão do Meta; os demais saem como trackCustom.
const PADRAO = new Set(["PageView", "ViewContent", "Lead", "InitiateCheckout", "Purchase"])

type Fbq = (...args: unknown[]) => void

// O snippet de base é injetado após a hidratação; até lá, aguarda o stub do fbq (até 5 s).
function comFbq(cb: (f: Fbq) => void) {
  let tries = 0
  const run = () => {
    const f = (window as unknown as { fbq?: Fbq }).fbq
    if (typeof f === "function") cb(f)
    else if (tries++ < 50) setTimeout(run, 100)
  }
  run()
}

function novoId() {
  try {
    return crypto.randomUUID()
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`
  }
}

export type DadosPessoa = { email?: string; nome?: string }

export function metaEvent(nome: string, dados: Record<string, unknown> = {}, pessoa?: DadosPessoa) {
  const eventId = novoId()
  comFbq((f) => f(PADRAO.has(nome) ? "track" : "trackCustom", nome, dados, { eventID: eventId }))
  // keepalive: o envio sobrevive à navegação (clique no checkout, envio do formulário).
  try {
    fetch("/api/meta-capi", {
      method: "POST",
      keepalive: true,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        event_name: nome,
        event_id: eventId,
        event_source_url: window.location.href,
        custom_data: dados,
        pessoa,
      }),
    }).catch(() => {})
  } catch {}
}
