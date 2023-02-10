import { Center, Stack, Text } from "@chakra-ui/react"
import { useStoreState } from "../../store/store"
import FeedbackIconButton from "../forms/FeedbackIconButton"
import AnswerStatus from "../../lib/AnswerStatus"
import React from "react"

/**
 * Ask users if they liked the question and submit results to the server
 * @constructor
 */
export default function QuestionFeedback() {
  const answer = useStoreState((state) => state.session.pageAnswer)
  const voted = useStoreState((state) => state.session.pageVoted)
  return (
    <Center
      mb={5}
      display={answer !== AnswerStatus.Unanswered && !voted ? "flex" : "none"}
    >
      <Stack
        direction="row"
        maxW="lg"
        display="flex"
        color="quarternary"
        alignItems="center"
      >
        <FeedbackIconButton isLiked={false} />
        <Text fontSize="lg">Was this a good question?</Text>
        <FeedbackIconButton isLiked={true} />
      </Stack>
    </Center>
  )
}
