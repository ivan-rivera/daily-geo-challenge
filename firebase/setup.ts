import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database"
import { getAuth, signInAnonymously } from "@firebase/auth"
import { Analytics, getAnalytics as getFbAnalytics } from "@firebase/analytics"
import { prodConfig, devConfig } from "./configs"

const MODE = process.env.NODE_ENV === "development" ? "DEV" : "PROD"
console.log("Connecting to Firebase in", MODE, "mode...")
const app = initializeApp(MODE === "DEV" ? devConfig : prodConfig)
const db = getDatabase(app)
const fbAuth = getAuth(app)
export const signIn = async (): Promise<void> => {
  await signInAnonymously(fbAuth)
}
export const getAnalytics = (): Analytics => getFbAnalytics(app)
export const databases = {
  questionDb: ref(db, "questions"),
  statsDb: ref(db, "stats"),
  latestIdDb: ref(db, "latestId"),
  contactDb: ref(db, "contact"),
}
