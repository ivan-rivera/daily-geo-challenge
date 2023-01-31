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
 *    - Analytics
 *    - Testing
 *    - Documentation
 *    - Queries
 *  - Backend:
 *    - Set up analytics
 *  - GA: Look into detailed analytics (e.g. rate of completion, time spent on page, etc) + feedback stuff
 *    - Find out if you can use GA4 as a DB for feedback, likes/dislikes, etc
 *    - rate of completion
 *    - rate of game initiation (people who start the game)
 *    - Of all visitors how many answer at least 1 question (or N questions)
 *    - Count of users returning N (1-7) days in a row
 *    - Average scores
 *    - time spent on page
 *    - Page not found counter
 *    - Server error counter
 *    - Trouble displaying an image?
 *    - Trouble inserting text into question/answer?
 *    - Clicks on share button
 *    - average likes/dislikes from feedback
 *    - display feedback text
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
 *    - Firebase tests (more to come)
 *    - GTM tests (more to come)
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
  await signIn()
    .then(() => console.log("Server signed in"))
    .catch((err) => console.error("Server sign in error", err))
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
