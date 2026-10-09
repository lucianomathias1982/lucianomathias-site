import type { Metadata } from "next"
import type { ReactNode } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Bebas_Neue } from "next/font/google"
import "./globals.css"
import LangSwitcher from "./lang-switcher"
import MetaPixel from "./meta-pixel"

// Fonte de títulos do site inteiro (classe font-display no Tailwind).
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-display" })

export const metadata: Metadata = {
  title: "Luciano Mathias",
  description: "Diretor e autor multimidia. Filmes com IA para marcas globais.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable} ${bebas.variable} font-sans`}>
      <body>
        {children}
        <LangSwitcher />
        <MetaPixel />
      </body>
    </html>
  )
}
