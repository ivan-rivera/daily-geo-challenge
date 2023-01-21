import { useEffect } from "react"
import { store } from "../store/store"
import { setQuizId } from "../lib/storage"
import { QuestionData, StaticProps } from "../lib/types"

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
    const sessionDispatcher = store.dispatch.session
    sessionDispatcher.setQuestions(props.questions)
    sessionDispatcher.setDailyScore(props.dailyScore)
    sessionDispatcher.setRefreshTime(props.time)
    cacheImages(props.questions)
  }, [props.questions, props.dailyScore, props.time])
}
