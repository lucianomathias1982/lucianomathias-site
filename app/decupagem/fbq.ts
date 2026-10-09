// Mesmo padrão de app/meta-pixel.tsx: o snippet do pixel entra depois da
// hidratação, então espera o fbq existir (até 5 s) antes de disparar.
type Fbq = (...args: unknown[]) => void

export function fbq(...args: unknown[]) {
  let tries = 0
  const run = () => {
    const f = (window as unknown as { fbq?: Fbq }).fbq
    if (typeof f === "function") f(...args)
    else if (tries++ < 50) setTimeout(run, 100)
  }
  run()
}
