import { setConfig } from "next/config"

setConfig({
  publicRuntimeConfig: {
    staticFolder: "/static",
    backendEnabled: false,
    questions: 5,
    choices: 4,
    revalidationIncrement: 60 * 60 * 24,
  },
})
