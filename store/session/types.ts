import { Action, Computed, Thunk, ThunkOn } from "easy-peasy"
import AnswerStatus from "../../lib/AnswerStatus"
import { FirebaseOptions } from "@firebase/app"

interface SessionAttributes {
  page: Page
  gitHubToken: string
  refreshTime: Date
  dailyScore: string
  questionsStats: Record<Page, QuestionStats>
  suggested: boolean
  questions: QuestionData[]
  picks: Record<Page, DataKey>
  answers: Record<Page, AnswerStatus>
  voted: Record<Page, boolean>
  fbOpts: FirebaseOptions
  finalScoreSubmitted: boolean
}

interface SessionSetters {
  resetSession: Action<SessionStoreModel>
  setPage: Action<SessionStoreModel, Page>
  setGitHubToken: Action<SessionStoreModel, string>
  setRefreshTime: Action<SessionStoreModel, Date>
  setSuggested: Action<SessionStoreModel, boolean>
  setDailyScore: Action<SessionStoreModel, number>
  setPagePick: Action<SessionStoreModel, DataKey>
  setPageAnswer: Action<SessionStoreModel, AnswerStatus>
  setPageVoted: Action<SessionStoreModel, boolean>
  setQuestions: Action<SessionStoreModel, QuestionData[]>
  setQuestionsStats: Action<SessionStoreModel, Record<Page, QuestionStats>>
  setFinalScoreSubmitted: Action<SessionStoreModel, boolean>
  setFbOpts: Action<SessionStoreModel, FirebaseOptions>
}

interface SessionThunks {
  onSetFinalScoreSubmitted: ThunkOn<SessionStoreModel, void, {}>
  setServerProps: Thunk<SessionStoreModel>
}

interface SessionComputed {
  pageQuestion: Computed<SessionStoreModel, QuestionData>
  pageAnswer: Computed<SessionStoreModel, AnswerStatus>
  pageVoted: Computed<SessionStoreModel, boolean>
  pagePick: Computed<SessionStoreModel, DataKey>
  questionStats: Computed<SessionStoreModel, QuestionStats>
  questionHasStats: Computed<SessionStoreModel, boolean>
  isCorrectPagePick: Computed<SessionStoreModel, boolean>
  pageIsAnswered: Computed<SessionStoreModel, boolean>
  isFinished: Computed<SessionStoreModel, boolean>
  totalCorrect: Computed<SessionStoreModel, number>
  yourScore: Computed<SessionStoreModel, string>
  shareScore: Computed<SessionStoreModel, string>
}

// TODO: test this store
export default interface SessionStoreModel
  extends SessionAttributes,
    SessionSetters,
    SessionComputed,
    SessionThunks {}
