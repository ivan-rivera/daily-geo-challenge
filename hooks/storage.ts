import { useEffect } from "react"
import { store, useStoreActions, useStoreState } from "../store/store"

/**
 * Cache images.
 * The idea is to iterate over each image at the beginning of the game and cache
 * it by instantiating it. This means that when the user reaches a page with an
 * image on it, it would have already loaded in the background.
 * @param questions
 */
function cacheImages(questions: QuestionData[]) {
  questions.map((question) => {
    const image = new Image()
    if (question.image) image.src = question.image
  })
}

/**
 * Reset progress if the game ID changes. This change is expected to happen
 * at a particular schedule declared in the settings (usually once a day).
 * @param latestQuizId
 */
export function useReset(latestQuizId: number) {
  const currentQuizId = useStoreState((state) => state.session.quizId)
  console.log("current quiz ID: ", currentQuizId)
  useStoreActions((actions) => {
    console.log("evaluating rest with quizID: ", latestQuizId)
    if (currentQuizId !== latestQuizId) {
      actions.session.resetSession()
      actions.session.setQuizId(latestQuizId)
    }
  })
}

/**
 * Process static props and pass them to the client
 * @param props
 */
export function useStaticProps(props: StaticProps) {
  useEffect(() => {
    store.dispatch.session.setQuestions(props.questions)
    store.dispatch.session.setRefreshTime(props.time)
    store.dispatch.session.setFbOpts(props.fbOpts)
    store.dispatch.session.setGitHubToken(props.gitHubToken)
    store.dispatch.session.setServerProps()
    cacheImages(props.questions)
  }, [props])
}
