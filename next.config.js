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
  publicRuntimeConfig: {
    title: "Daily Geo Challenge",
    hashtag: "#daily-geo-challenge",
    url: "https://www.dailygeochallenge.com", // TODO: update
    staticFolder: "/static",
    questions: 5,
    choices: 4,
    hoursBeforeUpdate: 24,
    minResponsesForGlobalStats: 10,
    minResponsesForQuestionStats: 10,
    version: "0.0.1",
  },
  images: {
    domains: ["commons.wikimedia.org"],
  },
}

module.exports = withMDX(nextConfig)
