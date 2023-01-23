import { useEffect } from "react"
import { store } from "../store/store"
import { setQuizId } from "../lib/storage"
import getConfig from "next/config"
import {
  calculateDailyScore,
  convertResponseToProp,
  filterOutLowResponse,
} from "../lib/stats"

const { publicRuntimeConfig } = getConfig()

function cacheImages(questions: QuestionData[]) {
  questions.map((question) => {
    const image = new Image()
    if (question.image) image.src = question.image
  })
}

/**
 * Reset progress if the game ID changes
 * @param latestQuizId
 */
export function useReset(latestQuizId: number) {
  useEffect(() => {
    // TODO: change condition to: getQuizId() !== latestQuizId
    if (true) {
      console.log("resetting progress...")
      setQuizId(latestQuizId)
      store.dispatch.session.resetSession()
    }
  }, [latestQuizId])
}

export function useStaticProps(props: StaticProps) {
  useEffect(() => {
    store.dispatch.session.setQuestions(props.questions)
    store.dispatch.session.setRefreshTime(props.time)
    cacheImages(props.questions)
  }, [props.questions, props.time])
}

/**
 * Retrieve server stats which include dailyScore and proportions of users
 * who have picked each answer for every question
 */
export function useServerStats() {
  useEffect(() => {
    // TODO: get daily score from firebase
    const globalDailyStats = { games: 10, correct: 38, questions: 5 }
    if (
      globalDailyStats.games >= publicRuntimeConfig.minResponsesForGlobalStats
    ) {
      const dailyScore = calculateDailyScore(globalDailyStats)
      store.dispatch.session.setDailyScore(dailyScore)
    }
    const questionsStats = {
      // TODO: get questions stats from firebase
      1: { A: 10, B: 2, C: 5, D: 12 },
      2: { A: 5, B: 8, C: 9 },
      3: { A: 1, B: 1, C: 4, D: 5 },
      4: { A: 2, B: 2, D: 1 },
    }
    const filteredQuestionsStats = Object.fromEntries(
      Object.entries(questionsStats)
        .filter(filterOutLowResponse)
        .map(convertResponseToProp)
    )
    store.dispatch.session.setQuestionsStats(filteredQuestionsStats)
  }, [])
}
