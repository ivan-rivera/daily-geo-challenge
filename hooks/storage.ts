import { useEffect } from "react"
import { store } from "../store/store"

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
 * Process static props and pass them to the client
 * @param props
 */
export function useStaticProps(props: StaticProps) {
  useEffect(() => {
    if (store.getState().session.quizId !== props.quizId) {
      store.dispatch.session.resetSession()
      store.dispatch.session.setQuizId(props.quizId)
    }
    store.dispatch.session.setQuestions(props.questions)
    store.dispatch.session.setFbOpts(props.fbOpts)
    store.dispatch.session.setGitHubToken(props.gitHubToken)
    store.dispatch.session.setServerProps()
    cacheImages(props.questions)
  }, [props])
}
