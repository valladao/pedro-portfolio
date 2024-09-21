/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Sanity's CDN
        port: "", // no specific port needed
        pathname: "/**" // wildcard for all paths
      }
    ]
  }
}

module.exports = nextConfig
