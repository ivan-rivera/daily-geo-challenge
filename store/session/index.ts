import { resetSession, setDailyScore, setToPayload } from "./setters"
import SessionStoreModel from "./types"
import {
  pageAnswer,
  pageVoted,
  isFinished,
  pageQuestion,
  pagePick,
  isCorrectPagePick,
  pageIsAnswered,
  yourScore,
  shareScore,
  questionStats,
  questionHasStats,
} from "./computations"

const initialState = {
  page: 0,
  suggested: false,
  refreshTime: new Date(),
  dailyScore: "TBD",
  questions: [],
  questionsStats: {},
  answers: {},
  picks: {},
  voted: {},
  finalScoreSubmitted: false,
}

const stateFn = {
  resetSession: resetSession(initialState),
  setPage: setToPayload("page"),
  setRefreshTime: setToPayload("refreshTime"),
  setQuestions: setToPayload("questions"),
  setSuggested: setToPayload("suggested"),
  setQuestionsStats: setToPayload("questionsStats"),
  setFinalScoreSubmitted: setToPayload("finalScoreSubmitted"),
  setPagePick: setToPayload("picks", false),
  setPageVoted: setToPayload("voted", false),
  setPageAnswer: setToPayload("answers", false),
  setDailyScore,
}

const stateComputed = {
  isFinished,
  pageVoted,
  pagePick,
  pageQuestion,
  pageAnswer,
  pageIsAnswered,
  isCorrectPagePick,
  questionStats,
  questionHasStats,
  yourScore,
  shareScore,
}

export const sessionStore: SessionStoreModel = {
  ...initialState,
  ...stateFn,
  ...stateComputed,
}
