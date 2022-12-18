import Welcome from "../components/welcome/Welcome";
import Quiz from "../components/quiz/Quiz";
import { useReset } from "../hooks/storage";
import { usePage } from "../hooks/session";

/**
 * Main entry point into the app
 * @constructor
 * TODO:
 *  - Create a Page Not Found error page
 *  - Set up Storybook
 *  - Set up Cypress and write some tests
 *  - Design question page + summary page
 *  - Create a few questions with dummy data (and then create question DB)
 *  - Set up Firebase
 *  - Set up Firebase DB schema
 *  - Pull quiz ID from the server
 *  - Wire logic to revalidate static props every hours and generate the question every 24 hours
 *  - Wire state management to respond to data refreshes
 *  - Look into detailed analytics (e.g. rate of completion, time spent on page, etc)
 */
export default function Home(props: StaticProps) {
  useReset(props.quizId);
  const [page, _setPage] = usePage();
  return <>{page === 0 ? <Welcome /> : <Quiz />}</>;
}

interface StaticProps {
  quizId: number;
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  return {
    props: {
      quizId: 1,
    },
  };
}
