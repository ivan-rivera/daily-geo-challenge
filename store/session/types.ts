import { AnswerStatus, DataKey, QuestionData } from "../../lib/types"
import { Action, Computed } from "easy-peasy"

type Page = number

interface SessionAttributes {
  page: Page
  refreshTime: Date
  dailyScore: string
  suggested: boolean
  questions: QuestionData[]
  picks: Record<Page, string> // TODO: look into maps?
  answers: Record<Page, AnswerStatus>
  voted: Record<Page, boolean>
}

interface SessionSetters {
  resetSession: Action<SessionStoreModel>
  setPage: Action<SessionStoreModel, Page>
  setRefreshTime: Action<SessionStoreModel, Date>
  setSuggested: Action<SessionStoreModel, boolean>
  setDailyScore: Action<SessionStoreModel, number>
  setPagePick: Action<SessionStoreModel, DataKey>
  setPageAnswer: Action<SessionStoreModel, AnswerStatus>
  setPageVoted: Action<SessionStoreModel, boolean>
  setQuestions: Action<SessionStoreModel, QuestionData[]>
}

interface SessionComputed {
  pageQuestion: Computed<SessionStoreModel, QuestionData>
  pageAnswer: Computed<SessionStoreModel, AnswerStatus>
  pageVoted: Computed<SessionStoreModel, boolean>
  pagePick: Computed<SessionStoreModel, string>
  isCorrectPagePick: Computed<SessionStoreModel, boolean>
  pageIsAnswered: Computed<SessionStoreModel, boolean>
  isFinished: Computed<SessionStoreModel, boolean>
  yourScore: Computed<SessionStoreModel, string>
  shareScore: Computed<SessionStoreModel, string>
}

export default interface SessionStoreModel
  extends SessionAttributes,
    SessionSetters,
    SessionComputed {}
