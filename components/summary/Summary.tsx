import { Text } from "@chakra-ui/react"
import BrandCard from "../display/BrandCard"
import { useStoreActions, useStoreState } from "../../store/store"
import Countdown from "./Countdown"
import ScoreReport from "./ScoreReport"
import Feedback from "./Feedback"
import Contact from "../forms/Contact"
import Share from "./Share"

export default function Summary() {
  /**
   * Summary screen that is displayed after the user has answered all questions
   * @constructor
   */
  const suggested = useStoreState((state) => state.session.suggested)
  const setSuggested = useStoreActions(
    (actions) => actions.session.setSuggested
  )

  const acceptTextSuggestion = () => {
    // TODO: submit data to server
    console.log("accept")
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
