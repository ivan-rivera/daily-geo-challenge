/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    staticFolder: "/static",
    questions: 10,
    version: "0.0.1",
  },
};
module.exports = nextConfig;
