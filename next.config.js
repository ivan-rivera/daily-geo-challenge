/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: [
      "pages",
      "components",
      "lib",
      "store",
      "hooks",
      "stories",
      "theme",
      "tests",
    ],
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
    questions: 10,
    version: "0.0.1",
  },
}
module.exports = nextConfig
