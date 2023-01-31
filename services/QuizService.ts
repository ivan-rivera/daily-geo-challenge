import { child, get, set } from "@firebase/database"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

import { databases } from "../firebase/setup"
const { statsDb, latestIdDb, questionDb } = databases

export class QuizService {
  private static initStats: DailyStats = {
    games: 0,
    correct: 0,
    questions: publicRuntimeConfig.questions,
  }
  private static async commitQuestions(
    questions: QuestionData[],
    quizId: number
  ): Promise<void> {
    await set(child(questionDb, quizId.toString()), questions)
  }
  private static async commitStats(quizId: number): Promise<void> {
    await set(child(statsDb, `${quizId.toString()}/summary`), this.initStats)
  }
  static async initQuiz(questions: QuestionData[], quizId: number) {
    this.commitQuestions(questions, quizId)
      .then(() => console.log("committed questions to DB"))
      .catch((e) => console.log("failed to commit questions to DB: ", e))
    this.commitStats(quizId)
      .then(() => console.log("committed stats to DB"))
      .catch((e) => console.log("failed to commit stats: ", e))
  }
  static async getLatestId(): Promise<number> {
    const latestIdSnapshot = await get(latestIdDb)
    const latestId = (latestIdSnapshot.val() || 0) + 1
    await set(latestIdDb, latestId)
    return latestId
  }
}
