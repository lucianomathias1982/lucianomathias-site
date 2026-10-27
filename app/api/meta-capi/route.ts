import { createHash } from "crypto"
import { NextRequest, NextResponse } from "next/server"
import { PIXEL_ID } from "../../meta-events"

// API de Conversões do Meta: recebe do navegador o mesmo evento que o pixel dispara
// (mesmo event_id) e reenvia pelo servidor, com IP, user agent e cookies _fbp/_fbc.
// O token fica na variável de ambiente META_CAPI_TOKEN da Vercel; sem ela, não faz nada.
// META_TEST_EVENT_CODE (opcional) manda os eventos para "Eventos de teste" no Gerenciador.
export const runtime = "nodejs"

const GRAPH = "https://graph.facebook.com/v23.0"

const PERMITIDOS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "VerObra",
  "VerPreco",
  "VerAula",
  "CliqueCheckout",
  "CliqueMentoria",
  "EnvioDecupagem",
])

const hash = (v: string) => createHash("sha256").update(v.trim().toLowerCase()).digest("hex")

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) return new NextResponse(null, { status: 204 })

  let body: {
    event_name?: string
    event_id?: string
    event_source_url?: string
    custom_data?: Record<string, unknown>
    pessoa?: { email?: string; nome?: string }
  }
  try {
    body = await req.json()
  } catch {
    return new NextResponse(null, { status: 400 })
  }
  if (!body.event_name || !PERMITIDOS.has(body.event_name) || !body.event_id) {
    return new NextResponse(null, { status: 400 })
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || undefined
  const user_data: Record<string, unknown> = {
    client_ip_address: ip,
    client_user_agent: req.headers.get("user-agent") || undefined,
    fbp: req.cookies.get("_fbp")?.value,
    fbc: req.cookies.get("_fbc")?.value,
  }
  const email = body.pessoa?.email
  if (email && email.includes("@")) user_data.em = [hash(email)]
  const nome = body.pessoa?.nome
  if (nome) user_data.fn = [hash(nome.split(" ")[0])]

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id: body.event_id,
        event_source_url: body.event_source_url,
        action_source: "website",
        user_data,
        custom_data: body.custom_data && Object.keys(body.custom_data).length ? body.custom_data : undefined,
      },
    ],
  }
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE

  try {
    const r = await fetch(`${GRAPH}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!r.ok) console.error("meta-capi", r.status, await r.text())
  } catch (e) {
    console.error("meta-capi", e)
  }
  return new NextResponse(null, { status: 204 })
}
