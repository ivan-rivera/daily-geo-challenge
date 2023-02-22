import {
  onSetFinalScoreSubmitted,
  resetSession,
  setDailyScore,
  setServerProps,
  setToPayload,
} from "./setters"
import SessionStoreModel from "./types"
import {
  isCorrectPagePick,
  isFinished,
  pageAnswer,
  pageIsAnswered,
  pagePick,
  pageQuestion,
  pageVoted,
  questionHasStats,
  questionStats,
  shareScore,
  totalCorrect,
  yourScore,
} from "./computations"
import { FirebaseOptions } from "@firebase/app"

const initialState = {
  page: 0,
  quizId: 0,
  suggested: false,
  refreshTime: new Date(),
  dailyScore: "TBD",
  questions: [],
  questionsStats: {},
  answers: {},
  picks: {},
  voted: {},
  fbOpts: {} as FirebaseOptions,
  gitHubToken: "",
  finalScoreSubmitted: false,
}

const stateFn = {
  resetSession: resetSession(initialState),
  setQuizId: setToPayload("quizId"),
  setGitHubToken: setToPayload("gitHubToken"),
  setPage: setToPayload("page"),
  setRefreshTime: setToPayload("refreshTime"),
  setQuestions: setToPayload("questions"),
  setSuggested: setToPayload("suggested"),
  setQuestionsStats: setToPayload("questionsStats"),
  setFinalScoreSubmitted: setToPayload("finalScoreSubmitted"),
  setFbOpts: setToPayload("fbOpts"),
  setPagePick: setToPayload("picks", false),
  setPageVoted: setToPayload("voted", false),
  setPageAnswer: setToPayload("answers", false),
  setDailyScore,
}

const thunks = {
  onSetFinalScoreSubmitted,
  setServerProps,
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
  totalCorrect,
  yourScore,
  shareScore,
}

export const sessionStore: SessionStoreModel = {
  ...initialState,
  ...stateFn,
  ...thunks,
  ...stateComputed,
}
