/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/officially-cloned-tylerwise',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig