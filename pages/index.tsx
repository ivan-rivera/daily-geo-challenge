import Welcome from "../components/welcome/Welcome"
import Game from "../components/game/Game"
import { sampleQuestions } from "../lib/questions/sampling"
import { useReset, useStaticProps } from "../hooks/storage"
import { useStoreState } from "../store/store"
import { QuizService } from "../services/QuizService"
import getConfig from "next/config"
import { signIn } from "../firebase/setup"
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

export async function getStaticProps() {
  const fbOpts = getFirebaseOptions()
  if (publicRuntimeConfig.backendEnabled) {
    await signIn(fbOpts)
      .then(() => console.log("Server signed in"))
      .catch((err) => console.error("Server sign in error", err))
  } else console.log("Backend disabled")
  const questions = sampleQuestions()
  const quizService = new QuizService(fbOpts)
  const quizId = await quizService.getLatestId()
  await quizService.initQuiz(questions, quizId)
  return {
    props: {
      fbOpts,
      gitHubToken: process.env.NEXT_PUBLIC_GH_TOKEN,
      questions,
      quizId,
      time: JSON.parse(JSON.stringify(new Date())),
    },
    revalidate: publicRuntimeConfig.revalidationIncrement,
  }
}
