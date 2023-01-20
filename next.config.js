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
    title: "Daily Geo Challenge",
    hashtag: "#daily-geo-challenge",
    url: "https://www.dailygeochallenge.com", // TODO: update
    staticFolder: "/static",
    questions: 5,
    choices: 4,
    hoursBeforeUpdate: 24,
    version: "0.0.1",
  },
  images: {
    domains: ["commons.wikimedia.org"],
  },
}
module.exports = nextConfig
