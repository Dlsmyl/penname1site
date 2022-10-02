/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
