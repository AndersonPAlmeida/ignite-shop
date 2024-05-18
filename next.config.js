/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images.remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
      },
    ]
    // domains: [
    // 'files.stripe.com'    
    // ]
  }
}

module.exports = nextConfig
