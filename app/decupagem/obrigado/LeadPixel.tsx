"use client"

import { useEffect, useRef } from "react"
import { fbq } from "../fbq"

// Lead do guia Decupagem: uma única vez ao carregar a página de obrigado.
export default function LeadPixel() {
  const sent = useRef(false)
  useEffect(() => {
    if (sent.current) return
    sent.current = true
    fbq("track", "Lead", { content_name: "Decupagem" })
  }, [])
  return null
}
