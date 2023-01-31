import { getQuizId } from "../lib/storage"
import { child, get, increment, update } from "@firebase/database"
import { store } from "../store/store"
import { databases } from "../firebase/setup"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

const { statsDb } = databases

export default class StatsService {
  private static get quizId(): string {
    return getQuizId().toString()
  }
  static get summaryPath(): string {
    return `${this.quizId}/summary`
  }
  static get questionsPath(): string {
    return `${this.quizId}/questions`
  }
  static async getDailyStats(): Promise<DailyStats> {
    const statsSnapshot = await get(child(statsDb, this.summaryPath))
    const stats = statsSnapshot.val() || {}
    return stats as DailyStats
  }
  static async submitFinalScore(): Promise<void> {
    await update(child(statsDb, this.summaryPath), {
      games: increment(1),
      correct: increment(store.getState().session.totalCorrect),
    })
  }
  static async submitAnswer(page: number, pick: DataKey): Promise<void> {
    await update(child(statsDb, `${this.questionsPath}/${page}`), {
      [pick]: increment(1),
    })
  }
  static async getStatsPerQuestion(): Promise<QuestionsStats> {
    const questionData = await get(child(statsDb, this.questionsPath))
    const transformedData = Object.entries(questionData)
      .filter(filterOutLowResponse)
      .map(convertResponseToProp)
    return Object.fromEntries(transformedData)
  }
}

function filterOutLowResponse([_key, values]: [
  string,
  Record<string, number>
]) {
  return (
    Object.values(values).reduce((sum, value) => sum + value, 0) >=
    publicRuntimeConfig.minResponsesForQuestionStats
  )
}

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
