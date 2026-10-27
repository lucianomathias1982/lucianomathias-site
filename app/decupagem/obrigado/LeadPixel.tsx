"use client"

import { useEffect, useRef } from "react"
import { metaEvent, type DadosPessoa } from "../../meta-events"

// Lead do guia Decupagem: uma única vez ao carregar a página de obrigado.
export default function LeadPixel() {
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    let pessoa: DadosPessoa | undefined
    try {
      pessoa = JSON.parse(sessionStorage.getItem("lm_pessoa") || "null") ?? undefined
    } catch {}
    metaEvent("Lead", { content_name: "Decupagem" }, pessoa)
  }, [])
  return null
}
