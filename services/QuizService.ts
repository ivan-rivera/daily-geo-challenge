import { child, DatabaseReference, get, set } from "@firebase/database"
import getConfig from "next/config"
import { ifBackendEnabled } from "../lib/backend"
import { getDatabases } from "../firebase/setup"
import { FirebaseOptions } from "@firebase/app"

const { publicRuntimeConfig } = getConfig()

export class QuizService {
  private readonly databases: FirebaseDatabases
  constructor(fbOpts: FirebaseOptions) {
    this.databases = getDatabases(fbOpts)
  }
  private get questionDb(): DatabaseReference {
    const { questionDb } = this.databases
    return questionDb
  }
  private get statsDb(): DatabaseReference {
    const { statsDb } = this.databases
    return statsDb
  }
  private get latestIdDb(): DatabaseReference {
    const { latestIdDb } = this.databases
    return latestIdDb
  }
  private initStats: DailyStats = {
    games: 0,
    correct: 0,
    questions: publicRuntimeConfig.questions,
  }
  @ifBackendEnabled()
  private async commitQuestions(
    questions: QuestionData[],
    quizId: number
  ): Promise<void> {
    await set(child(this.questionDb, quizId.toString()), questions)
  }
  @ifBackendEnabled()
  private async commitStats(quizId: number): Promise<void> {
    await set(
      child(this.statsDb, `${quizId.toString()}/summary`),
      this.initStats
    )
  }
  @ifBackendEnabled()
  async initQuiz(questions: QuestionData[], quizId: number): Promise<void> {
    this.commitQuestions(questions, quizId)
      .then(() => console.log("committed questions to DB"))
      .catch((e) => console.log("failed to commit questions to DB: ", e))
    this.commitStats(quizId)
      .then(() => console.log("committed stats to DB"))
      .catch((e) => console.log("failed to commit stats: ", e))
  }
  @ifBackendEnabled(Math.floor(Math.random() * 10_000))
  async getLatestId(): Promise<number> {
    const latestIdSnapshot = await get(this.latestIdDb)
    const latestId = (latestIdSnapshot.val() || 0) + 1
    await set(this.latestIdDb, latestId)
    return latestId
  }
}
