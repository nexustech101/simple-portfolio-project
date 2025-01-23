/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
  webpack: (config) => {
    config.output.chunkLoadTimeout = 30000; // Increase timeout to 30 seconds
    return config;
  },
};
// module.exports = nextConfig
