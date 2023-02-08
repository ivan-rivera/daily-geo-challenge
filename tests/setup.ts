import settings from "../settings.json"
import { setConfig } from "next/config"

settings.publicRuntimeConfig.backendEnabled = false
setConfig(settings)
