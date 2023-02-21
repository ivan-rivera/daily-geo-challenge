import { FirebaseOptions } from "@firebase/app"

/**
 * A function to retrieve the Firebase configurations. Note that we use 2
 * different Firebase projects for development and production. The developer
 * needs to have an `.env.local` file in the root directory of the project
 * with the environment variables used below, if unknown, then you can either
 * create your own Firebase project and use it for development, or you can
 * pass dummy values as environment variables and disable the backend in
 * settings.json.
 */
export const getFirebaseOptions = (): FirebaseOptions => {
  const devConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_DEV_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_DEV_FB_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DEV_FB_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_DEV_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_DEV_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_DEV_FB_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_DEV_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_DEV_GA_MEASUREMENT_ID,
  }
  const prodConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_PROD_FB_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_PROD_FB_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_PROD_FB_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROD_FB_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_PROD_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_PROD_FB_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_PROD_FB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_PROD_GA_MEASUREMENT_ID,
  }
  return ["development", "test"].includes(process.env.NODE_ENV)
    ? devConfig
    : prodConfig
}
