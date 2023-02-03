import Welcome from "../components/welcome/Welcome"
import Game from "../components/game/Game"
import { sampleQuestions } from "../lib/questions/sampling"
import { useReset, useStaticProps } from "../hooks/storage"
import { useStoreState } from "../store/store"
import { QuizService } from "../services/QuizService"
import getConfig from "next/config"
import { signIn } from "../firebase/setup"
import { useAuth } from "../hooks/auth"

const { publicRuntimeConfig } = getConfig()

/**
 * Main entry point into the app
 * @constructor
 * TODO:
 *  - Big ticket items:
 *    - Testing
 *    - Documentation
 *    - Queries
 *  - Tests: Playwright/Vitest (you will have to take a course on this)
 *    - modals click events
 *    - welcome page: hiding score (average available vs not available)
 *    - start game (clicking start game takes you to question 1 and you cannot go back to start page)
 *    - question navigation respecting the state
 *    - question navigation showing summary when completed
 *    - question card navigation: back/forward depending on page
 *    - question card: unanswered state
 *    - question card: answering correctly
 *    - question card: answering incorrectly
 *    - question card: up/down voted vs not voted
 *    - summary page: feedback provided vs not
 *    - summary page: share button logic
 *    - summary page average stats available vs not
 *    - Reset logic when the ID changes (test timeout?)
 *    - Share logic
 *    - Test all images & duplicates in the data
 *    - Analytics events are being fired?
 *    - GitHub actions
 *  - Queries
 *    - Remove duplicates
 *    - Validate numbers & images
 *    - Add more queries
 *    - Remove bad queries
 *    - Country capitals: remove misl
 *    - City founded date: remove Auckland
 *  - Docs:
 *    - Add license, contributing guidelines
 *    - Write proper documentation (go over the components, fix docs, etc)
 *  - Misc:
 *    - SEO research
 *    - Domain! (OMG why did I leave it until so late)
 *    - Remove redundant dependencies
 *    - Set up Git templates, etc
 *    - Google Ads + Google Network
 *    - Deploy & check DB logic, check analytics, check ISR
 *    - Set up Data Studio report
 *    - Ask for feedback
 *      - Carefully craft data structures for the app?
 *      - Create service classes like QuestionService?
 *      - Anything else?
 */
export default function Home(props: StaticProps) {
  useAuth()
  useReset(props.quizId)
  useStaticProps(props)
  const page = useStoreState((state) => state.session.page)
  return <>{page ? <Game /> : <Welcome />}</>
}

export async function getStaticProps() {
  if (publicRuntimeConfig.backendEnabled) {
    await signIn()
      .then(() => console.log("Server signed in"))
      .catch((err) => console.error("Server sign in error", err))
  } else console.log("Backend disabled")
  const questions = sampleQuestions()
  const quizId = await QuizService.getLatestId()
  await QuizService.initQuiz(questions, quizId)
  return {
    props: {
      questions,
      quizId,
      time: JSON.parse(JSON.stringify(new Date())),
    },
    revalidate: publicRuntimeConfig.revalidationIncrement,
  }
}
