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
} from "./computations"

const initialState = {
  page: 0,
  suggested: false,
  refreshTime: new Date(),
  dailyScore: "TBD",
  questions: [],
  answers: {},
  picks: {},
  voted: {},
}

const stateFn = {
  resetSession: resetSession(initialState),
  setPage: setToPayload("page"),
  setRefreshTime: setToPayload("refreshTime"),
  setQuestions: setToPayload("questions"),
  setSuggested: setToPayload("suggested"),
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
  yourScore,
  shareScore,
}

export const sessionStore: SessionStoreModel = {
  ...initialState,
  ...stateFn,
  ...stateComputed,
}
