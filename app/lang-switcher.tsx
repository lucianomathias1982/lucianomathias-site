"use client"

import { useEffect, useState } from "react"

const LANGS: [string, string][] = [
  ["pt", "PT"],
  ["en", "EN"],
  ["es", "ES"],
]

function currentLang(): string {
  if (typeof document === "undefined") return "pt"
  const m = document.cookie.match(/googtrans=\/[^/]*\/([a-z-]+)/i)
  return m ? m[1].toLowerCase() : "pt"
}

function applyCombo(code: string): boolean {
  const sel = document.querySelector(".goog-te-combo") as HTMLSelectElement | null
  if (!sel) return false
  sel.value = code
  sel.dispatchEvent(new Event("change"))
  return true
}

function applyWhenReady(code: string) {
  if (applyCombo(code)) return
  let n = 0
  const iv = setInterval(() => {
    n++
    if (applyCombo(code) || n > 60) clearInterval(iv)
  }, 300)
}

export default function LangSwitcher() {
  const [cur, setCur] = useState("pt")

  useEffect(() => {
    if (!document.getElementById("gt-hide-css")) {
      const st = document.createElement("style")
      st.id = "gt-hide-css"
      st.textContent = `
        .goog-te-banner-frame, .skiptranslate iframe, .goog-te-gadget-icon,
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        .goog-te-gadget { height: 0 !important; overflow: hidden !important; font-size: 0 !important; }
        body { top: 0 !important; position: static !important; }
        .goog-text-highlight { background: none !important; box-shadow: none !important; }
        #google_translate_element { position: absolute !important; left: -9999px !important; height: 0 !important; width: 0 !important; overflow: hidden !important; }
      `
      document.head.appendChild(st)
    }

    if (!document.getElementById("google_translate_element")) {
      const d = document.createElement("div")
      d.id = "google_translate_element"
      document.body.appendChild(d)
    }

    ;(window as any).googleTranslateElementInit = () => {
      try {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "pt", includedLanguages: "en,es,pt", autoDisplay: false },
          "google_translate_element"
        )
      } catch (e) {}
    }

    if (!document.getElementById("gt-script")) {
      const sc = document.createElement("script")
      sc.id = "gt-script"
      sc.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      document.body.appendChild(sc)
    }

    const target = currentLang()
    setCur(target)
    if (target !== "pt") applyWhenReady(target)
  }, [])

  function setLang(code: string) {
    const root = location.hostname.replace(/^www\./, "")
    const exp = "Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = `googtrans=;path=/;expires=${exp}`
    document.cookie = `googtrans=;path=/;domain=.${root};expires=${exp}`
    if (code !== "pt") {
      document.cookie = `googtrans=/pt/${code};path=/`
      document.cookie = `googtrans=/pt/${code};path=/;domain=.${root}`
    }
    setCur(code)
    if (code === "pt") {
      location.reload()
      return
    }
    applyWhenReady(code)
  }

  return (
    <div
      translate="no"
      className="notranslate fixed bottom-4 right-4 z-[60] flex items-center gap-0.5 rounded-full border border-white/15 bg-neutral-950/85 p-1 text-[11px] font-medium uppercase tracking-widest shadow-lg shadow-black/40 backdrop-blur"
    >
      {LANGS.map(([code, label]) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-2.5 py-1 transition ${
            cur === code ? "bg-white text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
