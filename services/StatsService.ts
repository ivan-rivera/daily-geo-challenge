import {
  child,
  DatabaseReference,
  get,
  increment,
  update,
} from "@firebase/database"
import { store } from "../store/store"
import getConfig from "next/config"
import { ifBackendEnabled } from "../lib/backend"
import { getDatabases } from "../firebase/setup"
import { AuthService } from "./AuthService"
import { FirebaseOptions } from "@firebase/app"

const { publicRuntimeConfig } = getConfig()

/**
 * Stats service, used to handle user stats.
 */
export default class StatsService {
  private static get fbOpts(): FirebaseOptions {
    return store.getState().session.fbOpts
  }
  private static get auth(): AuthService {
    return new AuthService(this.fbOpts)
  }
  private static get statsDb(): DatabaseReference {
    const { statsDb } = getDatabases(this.fbOpts)
    return statsDb
  }
  private static get quizId(): number {
    return store.getState().session.quizId
  }
  static get summaryPath(): string {
    return `${this.quizId}/summary`
  }
  static get questionsPath(): string {
    return `${this.quizId}/questions`
  }
  @ifBackendEnabled<DailyStatsSummary>({ games: 0, questions: 0, correct: 0 })
  static async getDailyStats(): Promise<DailyStatsSummary> {
    const statsSnapshot = await get(child(this.statsDb, this.summaryPath))
    const stats = statsSnapshot.val() || {}
    return stats as DailyStatsSummary
  }
  @ifBackendEnabled()
  static async submitFinalScore(): Promise<void> {
    await this.auth.signIn()
    await update(child(this.statsDb, this.summaryPath), {
      games: increment(1),
      correct: increment(store.getState().session.totalCorrect),
    })
  }
  @ifBackendEnabled()
  static async submitAnswer(page: number, pick: DataKey): Promise<void> {
    await this.auth.signIn()
    await update(child(this.statsDb, `${this.questionsPath}/${page}`), {
      [pick]: increment(1),
    })
  }
  @ifBackendEnabled<QuestionsStats>({})
  static async getStatsPerQuestion(): Promise<QuestionsStats> {
    const questionData = await get(child(this.statsDb, this.questionsPath))
    const data: QuestionsStats = questionData.val() || {}
    const transformedData = Object.entries(data)
      .filter(filterOutLowResponse)
      .map(convertResponseToProp)
    return Object.fromEntries(transformedData)
  }
}

/**
 * Filter out questions with less than N responses to avoid generating stats for them
 * @param _key
 * @param values
 */
function filterOutLowResponse([_key, values]: [
  string,
  Record<string, number>
]) {
  return (
    Object.values(values).reduce((sum, value) => sum + value, 0) >=
    publicRuntimeConfig.minResponsesForQuestionStats
  )
}

/**
 * Convert the response to a fraction of the total responses
 * @param key
 * @param values
 */
function convertResponseToProp([key, values]: [
  string,
  Record<string, number>
]) {
  const total = Object.values(values).reduce((sum, value) => sum + value, 0)
  const fractionValues = Object.fromEntries(
    Object.entries(values).map(([letter, count]) => [letter, count / total])
  )
  return [key, fractionValues]
}
