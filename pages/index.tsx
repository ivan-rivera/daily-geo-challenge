import Welcome from "../components/welcome/Welcome"
import Game from "../components/game/Game"
import { useStaticProps } from "../hooks/storage"
import { useStoreState } from "../store/store"
import { QuizService } from "../services/QuizService"
import React from "react"
import { getFirebaseOptions } from "../firebase/config"

/**
 * Main entry point into the app
 * @constructor
 */
export default function Home(props: StaticProps) {
  useStaticProps(props)
  const page = useStoreState((state) => state.session.page)
  return <>{page ? <Game /> : <Welcome />}</>
}

/**
 * Get the static props for the app. This function adds resources to the backend,
 * and then it passes relevant props to the client side. Note that ISR is handled
 * via a cron job that calls the `revalidate` endpoint once every 24 hours.
 */
export async function getStaticProps() {
  const fbOpts = getFirebaseOptions()
  const quizService = new QuizService(fbOpts)
  const [quizId, questions] = await quizService.init()
  return {
    props: {
      gitHubToken: process.env.NEXT_PUBLIC_GH_TOKEN,
      fbOpts,
      questions,
      quizId,
    },
  }
}
