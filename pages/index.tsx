import Welcome from "../components/welcome/Welcome"
import Quiz from "../components/quiz/Quiz"
import { useReset } from "../hooks/storage"
import { usePage } from "../hooks/session"

/**
 * Main entry point into the app
 * @constructor
 * TODO:
 *  - Set up Jest/Vitest and Cypress/Playwright and write some tests
 *  - Design question page + summary page
 *  - Create the quiz page with few questions with dummy data (and then create question DB)
 *  - Storybook: mock state to get the quiz component displayed
 *  - Set up Firebase
 *  - Set up Firebase DB schema (firestore + local interfaces)
 *  - Look into Firebase emulator
 *  - Pull quiz ID from the server
 *  - Wire logic to revalidate static props every hours and generate the question every 24 hours
 *  - Redesign favicon
 *  - Look into detailed analytics (e.g. rate of completion, time spent on page, etc)
 *  - Remove redundant dependencies
 *  - Write proper README (go over the components, fix docs, etc)
 *  - Add license, contributing guidelines, etc
 *  - Set up Git templates, etc
 */
export default function Home(props: StaticProps) {
  useReset(props.quizId)
  const [page, _setPage] = usePage()
  return <>{page ? <Quiz /> : <Welcome />}</>
}

interface StaticProps {
  quizId: number
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  return {
    props: {
      quizId: 1,
    },
  }
}
