const settings = require("./settings")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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
  publicRuntimeConfig: settings.publicRuntimeConfig,
  images: {
    domains: ["commons.wikimedia.org"],
  },
}

module.exports = withMDX(nextConfig)
