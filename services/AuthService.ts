import { getFirebaseOptions } from "../firebase/config"
import { signIn } from "../firebase/setup"
import getConfig from "next/config"
import { FirebaseOptions } from "@firebase/app"

const { publicRuntimeConfig } = getConfig()

export class AuthService {
  private readonly fbOpts: FirebaseOptions
  constructor(fbOpts: FirebaseOptions) {
    this.fbOpts = fbOpts
  }
  async signIn() {
    if (publicRuntimeConfig.backendEnabled) {
      const fbOpts = getFirebaseOptions()
      await signIn(fbOpts).catch((err) => console.error("Sign in error", err))
    } else console.log("Backend disabled, skipping sign in...")
  }
}
