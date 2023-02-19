import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database"
import { getAuth, signInAnonymously } from "@firebase/auth"
import { Analytics, getAnalytics as getFbAnalytics } from "@firebase/analytics"
import { FirebaseOptions } from "@firebase/app"

export const signIn = async (fbOpts: FirebaseOptions): Promise<void> => {
  const app = initializeApp(fbOpts)
  await signInAnonymously(getAuth(app))
}

export const getAnalytics = (fbOpts: FirebaseOptions): Analytics => {
  const app = initializeApp(fbOpts)
  return getFbAnalytics(app)
}

export const getDatabases = (fbOpts: FirebaseOptions): FirebaseDatabases => {
  console.log("firebase options: ", fbOpts)
  const app = initializeApp(fbOpts)
  const db = getDatabase(app)
  return {
    questionDb: ref(db, "questions"),
    statsDb: ref(db, "stats"),
    latestIdDb: ref(db, "latestId"),
    contactDb: ref(db, "contact"),
  }
}
