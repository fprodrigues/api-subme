/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://https://ec2-54-83-81-178.compute-1.amazonaws.com/:path*',
      }
    ]
  }
}

module.exports = nextConfig
