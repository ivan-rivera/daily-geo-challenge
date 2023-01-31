import { child, increment, set, update } from "@firebase/database"
import { databases } from "../firebase/setup"
import getConfig from "next/config"
import { getQuizId } from "../lib/storage"
import { v4 as uuid } from "uuid"

const { contactDb, statsDb } = databases
const { publicRuntimeConfig } = getConfig()

export default class FeedbackService {
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
  static async sendMessage(
    message: string,
    kind: "contact" | "suggestion"
  ): Promise<void> {
    const db = child(contactDb, `${kind}/${this.path}`)
    await set(db, message)
      .then(() => console.log("message sent"))
      .catch((e) => console.log("failed to send message: ", e))
  }
  static async submitRating(page: number, liked: boolean): Promise<void> {
    const location = page > publicRuntimeConfig.questions ? "summary" : page
    const db = child(statsDb, `${this.quizId}/feedback/${location}`)
    const kind = liked ? "liked" : "disliked"
    await update(db, { [kind]: increment(1) })
      .then(() => console.log(`rating at location ${location} sent`))
      .catch((e) =>
        console.log(`failed to send rating at location ${location}: `, e)
      )
  }
}
