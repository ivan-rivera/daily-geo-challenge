/**
 * Firebase setup.
 * Note that FB resources are declared as functions because they have to be
 * instantiated both on the client and server side. The server populates quiz
 * ID and the questions, while the client populates the stats. FB configs are
 * declared as environment variables which are available to the server but not
 * the client, so they are injected into the client local storage. While we try
 * to hide these parameters, since they are available on client side, they are
 * public and therefore not secure.
 */

import { initializeApp } from "firebase/app"
import { getDatabase, ref } from "firebase/database"
import { getAuth, signInAnonymously } from "@firebase/auth"
import { Analytics, getAnalytics as getFbAnalytics } from "@firebase/analytics"
import { FirebaseOptions } from "@firebase/app"

/**
 * Sign in method for Firebase.
 * Anonymous authentication helps to prevent DB abuse
 * @param fbOpts
 */
export const signIn = async (fbOpts: FirebaseOptions): Promise<void> => {
  const app = initializeApp(fbOpts)
  await signInAnonymously(getAuth(app))
}

/**
 * Get analytics instance for Firebase. This is useful for GA tracking.
 * @param fbOpts
 */
export const getAnalytics = (fbOpts: FirebaseOptions): Analytics => {
  const app = initializeApp(fbOpts)
  return getFbAnalytics(app)
}

/**
 * Get all Firebase databases.
 * @param fbOpts
 */
export const getDatabases = (fbOpts: FirebaseOptions): FirebaseDatabases => {
  const app = initializeApp(fbOpts)
  const db = getDatabase(app)
  return {
    questionDb: ref(db, "questions"),
    latestIdDb: ref(db, "latestId"),
    statsDb: ref(db, "stats"),
    contactDb: ref(db, "contact"),
  }
}
