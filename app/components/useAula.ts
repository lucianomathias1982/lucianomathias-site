"use client"

import { useEffect, useState } from "react"
import { bonusAberto, faseAula, type FaseAula } from "./aula-config"

const CICLO = 30_000

// O servidor renderiza sempre o estado inicial e o navegador corrige ao montar e a cada 30 s,
// para não haver erro de hidratação nem oferta vencida servida do cache.
function useRelogio<T>(inicial: T, calcular: () => T) {
  const [valor, setValor] = useState(inicial)
  useEffect(() => {
    const atualizar = () => setValor(calcular())
    atualizar()
    const t = setInterval(atualizar, CICLO)
    return () => clearInterval(t)
    // calcular é sempre uma função estável definida abaixo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return valor
}

export function useFaseAula(): FaseAula {
  return useRelogio<FaseAula>("inscricao", () => faseAula())
}

// A faixa do curso fica até o fim da transmissão.
export function useFaixaAula() {
  return useRelogio(true, () => faseAula() !== "gravacao")
}

// Começa fechado para não exibir o bônus vencido a partir do cache.
export function useBonusNovembro() {
  return useRelogio(false, () => bonusAberto())
}
