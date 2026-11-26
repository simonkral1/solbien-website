/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prepare a self-contained static site for Cloudflare Pages (branch-only preflight).
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
}

export default nextConfig
