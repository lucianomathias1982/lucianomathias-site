"use client"

import type { FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { fbq } from "./fbq"

// POST HTML puro para o Hotmart Send, que dispara a sequência de e-mails e
// redireciona para /decupagem/obrigado. Não trocar por fetch nem por API própria.
const ACTION = "https://handler.send.hotmart.com/subscription/3qu28a7?hotfeature=53"

const INPUT =
  "w-full rounded-xl border border-[#2a2a2a] bg-[#111] px-4 py-3.5 text-base text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-neutral-500"

export default function DecupagemForm() {
  // Antes do envio (sem preventDefault), repassa à action os UTMs e src/sck da
  // URL atual, mantendo o hotfeature=53, como faz o script original da Hotmart.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget
    try {
      const here = new URLSearchParams(window.location.search)
      const url = new URL(ACTION)
      here.forEach((v, k) => {
        if (k.startsWith("utm_") || k === "src" || k === "sck") url.searchParams.set(k, v)
      })
      form.action = url.toString()
    } catch {}
    fbq("trackCustom", "EnvioDecupagem")
  }

  return (
    <form method="post" action={ACTION} id="form-decupagem" onSubmit={onSubmit} className="relative space-y-3">
      <input type="text" name="first_name" required placeholder="Seu primeiro nome" autoComplete="given-name" className={INPUT} />
      <input type="email" name="email" required placeholder="Seu melhor e-mail" autoComplete="email" className={INPUT} />
      <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm text-neutral-400">
        <input
          type="checkbox"
          name="gdpr"
          value="Concordo em receber os e-mails"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#4ADE80]"
        />
        Concordo em receber os e-mails. Posso cancelar quando quiser.
      </label>
      {/* honeypot anti-spam: manter exatamente assim, fora da tela */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input type="text" name="b_3qu28a7" tabIndex={-1} defaultValue="" />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition hover:bg-neutral-200"
      >
        Quero o guia grátis
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs leading-relaxed text-neutral-500">
        Seus dados serão usados para enviar o guia e conteúdos sobre filmes com IA. Cada e-mail traz um link para cancelar.
      </p>
    </form>
  )
}
