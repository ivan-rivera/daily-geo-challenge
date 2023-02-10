import React from "react"
import { IconButton } from "@chakra-ui/react"
import { IconThumbDown, IconThumbUp } from "@tabler/icons"
import { useStoreActions, useStoreState } from "../../store/store"
import FeedbackService from "../../services/FeedbackService"
import AnalyticsService from "../../services/AnalyticsService"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export default function FeedbackIconButton({ isLiked }: { isLiked: boolean }) {
  const page = useStoreState((state) => state.session.page)
  const setVoted = useStoreActions((actions) => actions.session.setPageVoted)
  const questionId = useStoreState((state) =>
    state.session.page > publicRuntimeConfig.questions
      ? 0
      : state.session.pageQuestion.id
  )
  const handleFeedback = async (isLiked: boolean): Promise<void> => {
    if (questionId === 0)
      AnalyticsService.setUserProperties({
        evaluator: isLiked ? "attractor" : "detractor",
      })
    AnalyticsService.logEvent("feedback", {
      positive: +isLiked,
      question_id: questionId,
    })
    await FeedbackService.submitRating(page, isLiked)
    setVoted(true)
  }
  return (
    <IconButton
      icon={isLiked ? <IconThumbUp /> : <IconThumbDown />}
      aria-label={isLiked ? "like" : "dislike"}
      boxSize={10}
      onClick={() => handleFeedback(isLiked)}
      bg="background"
      color="quarternary"
      _hover={{ bg: "background", color: isLiked ? "success" : "error" }}
    />
  )
}
