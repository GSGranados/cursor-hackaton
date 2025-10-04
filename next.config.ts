import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    config.resolve.alias.encoding = false
    return config
  },
}

export default nextConfig
