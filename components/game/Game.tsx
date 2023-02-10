import React from "react"
import Question from "../questions/Question"
import Summary from "../summary/Summary"
import getConfig from "next/config"
import NavBar from "../navigation/NavBar"
import { useStoreState } from "../../store/store"

const { publicRuntimeConfig } = getConfig()

/**
 * Main game component
 * This component displays the top progress bar together with game content.
 * Game content is either a question or the summary of the results
 * @constructor
 */
export default function Game() {
  const page = useStoreState((state) => state.session.page)
  return (
    <>
      <NavBar />
      {page <= publicRuntimeConfig.questions ? <Question /> : <Summary />}
    </>
  )
}
