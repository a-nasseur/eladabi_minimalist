/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
    // path: 'https:/res.cloudinary.com/',
  },
}


module.exports = nextConfig
