/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: async ()=>{
    return 'my-build-id-feed-market-with-nextJS'
  }
}

module.exports = nextConfig
