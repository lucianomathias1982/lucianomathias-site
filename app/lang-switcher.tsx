"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const LANGS: [string, string][] = [
  ["pt", "PT"],
  ["en", "EN"],
  ["es", "ES"],
]

export default function LangSwitcher() {
  const pathname = usePathname() || "/"
  const m = pathname.match(/^\/(en|es)(\/.*)?$/)
  const cur = m ? m[1] : "pt"
  const base = m ? m[2] || "/" : pathname

  function href(code: string) {
    const p = base === "/" ? "" : base
    if (code === "pt") return p || "/"
    return `/${code}${p}`
  }

  return (
    <div
      translate="no"
      className="notranslate fixed bottom-4 right-4 z-[60] flex items-center gap-0.5 rounded-full border border-white/15 bg-neutral-950/85 p-1 text-[11px] font-medium uppercase tracking-widest shadow-lg shadow-black/40 backdrop-blur"
    >
      {LANGS.map(([code, label]) => (
        <Link
          key={code}
          href={href(code)}
          className={`rounded-full px-2.5 py-1 transition ${
            cur === code ? "bg-white text-black" : "text-neutral-400 hover:text-white"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
