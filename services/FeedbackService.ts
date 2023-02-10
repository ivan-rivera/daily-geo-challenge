import {
  child,
  DatabaseReference,
  increment,
  set,
  update,
} from "@firebase/database"
import getConfig from "next/config"
import { getQuizId } from "../lib/storage"
import { uuid } from "uuidv4"
import { ifBackendEnabled } from "../lib/backend"
import { getDatabases } from "../firebase/setup"
import { store } from "../store/store"

const { publicRuntimeConfig } = getConfig()

export default class FeedbackService {
  private static get firebaseDatabases(): FirebaseDatabases {
    return getDatabases(store.getState().session.fbOpts)
  }
  private static get contactDb(): DatabaseReference {
    const { contactDb } = this.firebaseDatabases
    return contactDb
  }
  private static get statsDb(): DatabaseReference {
    const { statsDb } = this.firebaseDatabases
    return statsDb
  }
  static get quizId(): string {
    return getQuizId().toString()
  }
  private static get path(): string {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const date = `${year}-${month}-${day}`
    return `${date}/${uuid()}`
  }
  @ifBackendEnabled()
  static async sendMessage(
    message: string,
    kind: "contact" | "suggestion"
  ): Promise<void> {
    const db = child(this.contactDb, `${kind}/${this.path}`)
    await set(db, message)
      .then(() => console.log("message sent"))
      .catch((e) => console.log("failed to send message: ", e))
  }
  @ifBackendEnabled()
  static async submitRating(page: number, liked: boolean): Promise<void> {
    const location = page > publicRuntimeConfig.questions ? "summary" : page
    const db = child(this.statsDb, `${this.quizId}/feedback/${location}`)
    const kind = liked ? "liked" : "disliked"
    await update(db, { [kind]: increment(1) })
      .then(() => console.log(`rating at location ${location} sent`))
      .catch((e) =>
        console.log(`failed to send rating at location ${location}: `, e)
      )
  }
}
