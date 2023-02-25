import { Text } from "@chakra-ui/react"
import BrandCard from "../display/BrandCard"
import { store, useStoreActions, useStoreState } from "../../store/store"
import ScoreReport from "./ScoreReport"
import Feedback from "./Feedback"
import Contact from "../forms/Contact"
import Share from "./Share"
import FeedbackService from "../../services/FeedbackService"
import { useEffect } from "react"
import AnalyticsService from "../../services/AnalyticsService"
import React from "react"
import { createIssue } from "../../lib/issues"
import Countdown from "./Countdown"

/**
 * Summary screen that is displayed after the user has answered all questions
 * @constructor
 */
export default function Summary() {
  useEffect(() => {
    if (!store.getState().session.finalScoreSubmitted) {
      AnalyticsService.logEvent("goal_completion", { goal_name: "end" })
      AnalyticsService.setUserProperties({ player: "finisher" })
      store.dispatch.session.setFinalScoreSubmitted(true)
    }
  }, [])
  const suggested = useStoreState((state) => state.session.suggested)
  const setSuggested = useStoreActions(
    (actions) => actions.session.setSuggested
  )
  const acceptTextSuggestion = async (suggestion: string): Promise<void> => {
    AnalyticsService.logEvent("contact", { contact_type: "suggestion" })
    await FeedbackService.sendMessage(suggestion, "suggestion")
    await createIssue(suggestion, store.getState().session.gitHubToken)
    setSuggested(true)
  }
  return (
    <>
      <BrandCard bg="secondary" mb={5}>
        <Text my={2} color="quarternary" fontSize="3xl">
          You are done for today!
        </Text>
        <Countdown />
        <ScoreReport />
        <Share />
      </BrandCard>
      <Feedback />
      {suggested ? (
        <Text>Thanks for your feedback!</Text>
      ) : (
        <Contact title="How can we improve?" onClick={acceptTextSuggestion} />
      )}
    </>
  )
}
