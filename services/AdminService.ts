import { getApps } from "firebase-admin/app"
import admin, { app } from "firebase-admin"
import { FirebaseOptions } from "@firebase/app"
import { getFirebaseOptions } from "../firebase/config"
import { DATABASES } from "../lib/constants"
import { Reference } from "@firebase/database-types"

export default class AdminService {
  private static get app(): app.App {
    const existingApps = getApps()
    if (existingApps.length) {
      // @ts-ignore
      return existingApps[0]
    }
    return admin.initializeApp({
      // @ts-ignore
      credential: admin.credential.cert(ServiceAccount.credentials),
      databaseURL: ServiceAccount.fbOpts.databaseURL,
    })
  }
  private static get db() {
    return this.app.database()
  }
  static get latestIdDb(): Reference {
    return this.db.ref(DATABASES.latestId)
  }
  static get questionDb(): Reference {
    return this.db.ref(DATABASES.questions)
  }
  static get statsDb(): Reference {
    return this.db.ref(DATABASES.stats)
  }
}

class ServiceAccount {
  private static get isDev(): boolean {
    return ["development", "test"].includes(process.env.NODE_ENV)
  }
  static get fbOpts(): FirebaseOptions {
    return getFirebaseOptions()
  }
  private static get privateKeyId(): string {
    return (
      (this.isDev
        ? process.env.ADMIN_DEV_PRIVATE_KEY_ID
        : process.env.ADMIN_PROD_PRIVATE_KEY_ID) || ""
    )
  }
  private static get privateKey(): string {
    const privateKey =
      (this.isDev
        ? process.env.ADMIN_DEV_PRIVATE_KEY
        : process.env.ADMIN_PROD_PRIVATE_KEY) || ""
    return privateKey.replace(/\\n/g, "\n")
  }
  private static get clientEmail(): string {
    return (
      (this.isDev
        ? process.env.ADMIN_DEV_CLIENT_EMAIL
        : process.env.ADMIN_PROD_CLIENT_EMAIL) || ""
    )
  }
  private static get clientId(): string {
    return (
      (this.isDev
        ? process.env.ADMIN_DEV_CLIENT_ID
        : process.env.ADMIN_PROD_CLIENT_ID) || ""
    )
  }
  private static get clientX509CertUrl(): string {
    return (
      (this.isDev
        ? process.env.ADMIN_DEV_CLIENT_X509_CERT_URL
        : process.env.ADMIN_PROD_CLIENT_X509_CERT_URL) || ""
    )
  }
  static get credentials() {
    return {
      type: "service_account",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      project_id: this.fbOpts.projectId,
      client_x509_cert_url: this.clientX509CertUrl,
      private_key_id: this.privateKeyId,
      private_key: this.privateKey,
      client_email: this.clientEmail,
      client_id: this.clientId,
    }
  }
}
