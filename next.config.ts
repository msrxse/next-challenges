import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'placecats.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
