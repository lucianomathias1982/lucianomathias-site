/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  // A URL publica e /aifilms. As pastas seguem chamando "obra" no codigo;
  // o rewrite abaixo serve a pagina sem mudar o endereco na barra.
  async redirects() {
    return [
      { source: "/obra", destination: "/aifilms", permanent: true },
      { source: "/en/obra", destination: "/en/aifilms", permanent: true },
      { source: "/es/obra", destination: "/es/aifilms", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/aifilms", destination: "/obra" },
      { source: "/en/aifilms", destination: "/en/obra" },
      { source: "/es/aifilms", destination: "/es/obra" },
    ];
  },
};
export default nextConfig;
