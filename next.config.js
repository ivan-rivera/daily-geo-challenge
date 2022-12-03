/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    staticFolder: "/static",
    rounds: 10,
  },
};
module.exports = nextConfig;
