import { child, DatabaseReference, get, set } from "@firebase/database"
import getConfig from "next/config"
import { ifBackendEnabled } from "../lib/backend"
import { getDatabases } from "../firebase/setup"
import { FirebaseOptions } from "@firebase/app"
import { AuthService } from "./AuthService"
import { sampleQuestions } from "../lib/questions/sampling"

const { publicRuntimeConfig } = getConfig()

/**
 * getStaticProps sometimes runs several times during and after the build
 * (not yet sure whether intentionally or due to a bug), and to avoid
 * quickly regenerating a quiz, we need a cooldown period. This period
 * marks the shortest possible duration that a quiz can be alive for.
 */
const COOLDOWN = 60 * 5

/**
 * Quiz service used to instantiate the quiz.
 */
export class QuizService {
  private readonly databases: FirebaseDatabases
  private readonly auth: AuthService
  constructor(fbOpts: FirebaseOptions) {
    this.databases = getDatabases(fbOpts)
    this.auth = new AuthService(fbOpts)
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

  /**
   * Initialize the quiz. This method handles anonymous sign in, then it retrieves
   * the latest quiz ID together with the datetime when it was generated. If the
   * quiz DB was recently updated, then we generate new questions for it, otherwise
   * we retrieve existing questions from the DB.
   */
  @ifBackendEnabled([0, sampleQuestions()])
  async init(): Promise<[number, QuestionData[]]> {
    await this.auth.signIn()
    const [updated, quizId] = await this.getLatestQuiz()
    let questions: QuestionData[]
    if (updated) {
      questions = sampleQuestions()
      this.commitQuestions(questions, quizId)
        .then(() => console.log("committed questions to DB"))
        .catch((e) => console.log("failed to commit questions to DB: ", e))
      this.commitStats(quizId)
        .then(() => console.log("committed stats to DB"))
        .catch((e) => console.log("failed to commit stats: ", e))
    } else {
      console.log("using cached data from previous quizID")
      const questionPath = child(this.questionDb, quizId.toString())
      const questionsSnapshot = await get(questionPath)
      questions = questionsSnapshot.val() || []
    }
    return [quizId, questions]
  }

  /**
   * Get the latest quiz reference
   * If no previous data has been created, then we generate a new quiz, otherwise
   * we first check when was the last quiz generated and if it was within the
   * cooldown period, we use the same quiz instead of generating a new one. See
   * more info about the cooldown period next to the constant definition. In
   * addition to the quiz ID, we return the datetime object when the quiz
   * was generated and a boolean flag indicating whether the quiz was updated.
   * @private
   */
  private async getLatestQuiz(): Promise<[boolean, number]> {
    const latestIdSnapshot = await get(this.latestIdDb)
    const latestIdContent = latestIdSnapshot.val() || { id: 0, time: 0 }
    let latestId = latestIdContent.id
    let updated = false
    const now = Math.floor(Date.now() / 1000)
    if (now - latestIdContent.time > COOLDOWN) {
      updated = true
      await set(child(this.latestIdDb, "id"), ++latestId)
      await set(child(this.latestIdDb, "time"), now)
    }
    return [updated, latestId]
  }
}
