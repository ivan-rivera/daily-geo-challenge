import Welcome from "../components/welcome/Welcome"
import Game from "../components/game/Game"
import { useReset, useStaticProps } from "../hooks/storage"
import { useStoreState } from "../store/store"
import { QuizService } from "../services/QuizService"
import getConfig from "next/config"
import React from "react"
import { getFirebaseOptions } from "../firebase/config"

const { publicRuntimeConfig } = getConfig()

/**
 * Main entry point into the app
 * @constructor
 */
export default function Home(props: StaticProps) {
  useReset(props.quizId)
  useStaticProps(props)
  const page = useStoreState((state) => state.session.page)
  return <>{page ? <Game /> : <Welcome />}</>
}

/**
 * Get the static props for the app. This function adds resources to the backend,
 * and then it passes relevant props to the client side. Note that we are using
 * ISR here, so the app gets regenerated every N seconds.
 */
export async function getStaticProps() {
  const fbOpts = getFirebaseOptions()
  const quizService = new QuizService(fbOpts)
  const [quizId, date, questions] = await quizService.init()
  return {
    props: {
      fbOpts,
      gitHubToken: process.env.NEXT_PUBLIC_GH_TOKEN,
      questions,
      quizId,
      time: JSON.parse(JSON.stringify(date)),
    },
    revalidate: publicRuntimeConfig.revalidationIncrement,
  }
}
