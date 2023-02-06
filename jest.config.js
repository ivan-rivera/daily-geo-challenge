/** @type {import('jest').Config} */
const config = {
  rootDir: "./",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  modulePaths: ["<rootDir>/", "<rootDir>/data"],
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  automock: true,
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
}

module.exports = config
