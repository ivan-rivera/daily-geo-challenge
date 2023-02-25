import getConfig from "next/config"
import { ifBackendEnabled } from "../lib/backend"
import { sampleQuestions } from "../lib/questions/sampling"
import AdminService from "./AdminService"

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
  private static initStats: DailyStatsSummary = {
    games: 0,
    correct: 0,
    questions: publicRuntimeConfig.questions,
  }
  @ifBackendEnabled()
  private static async commitQuestions(
    questions: QuestionData[],
    quizId: number
  ): Promise<void> {
    await AdminService.questionDb.child(quizId.toString()).set(questions)
  }
  @ifBackendEnabled()
  private static async commitStats(quizId: number): Promise<void> {
    await AdminService.statsDb.child(`${quizId}/summary`).set(this.initStats)
  }

  /**
   * Initialize the quiz. This method handles anonymous sign in, then it retrieves
   * the latest quiz ID together with the datetime when it was generated. If the
   * quiz DB was recently updated, then we generate new questions for it, otherwise
   * we retrieve existing questions from the DB.
   */
  @ifBackendEnabled([0, sampleQuestions()])
  static async init(): Promise<[number, QuestionData[]]> {
    const [updated, quizId] = await this.getLatestQuiz()
    let questions: QuestionData[]
    if (updated) {
      questions = sampleQuestions()
      await this.updateQuiz(questions, quizId)
    } else {
      console.log("using cached data from previous quizID")
      const questionsSnapshot = await AdminService.questionDb
        .child(quizId.toString())
        .get()
      questions = questionsSnapshot.val() || []
    }
    return [quizId, questions]
  }

  /**
   * Set new quiz data for the current quiz ID
   * @param questions
   * @param quizId
   * @private
   */
  private static async updateQuiz(questions: QuestionData[], quizId: number) {
    this.commitQuestions(questions, quizId)
      .then(() => console.log("committed questions to DB"))
      .catch((e) => console.log("failed to commit questions to DB: ", e))
    this.commitStats(quizId)
      .then(() => console.log("committed stats to DB"))
      .catch((e) => console.log("failed to commit stats: ", e))
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
  private static async getLatestQuiz(): Promise<[boolean, number]> {
    const latestIdSnapshot = await AdminService.latestIdDb.get()
    const latestIdContent = latestIdSnapshot.val() || { id: 0, time: 0 }
    let latestId = latestIdContent.id
    let updated = false
    const now = Math.floor(Date.now() / 1000)
    if (now - latestIdContent.time > COOLDOWN) {
      updated = true
      await AdminService.latestIdDb.child("id").set(++latestId)
      await AdminService.latestIdDb.child("time").set(now)
    }
    return [updated, latestId]
  }
}
