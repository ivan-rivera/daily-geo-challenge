import { IconButton } from "@chakra-ui/react"
import { IconThumbDown, IconThumbUp } from "@tabler/icons"
import { useStoreActions, useStoreState } from "../../store/store"
import FeedbackService from "../../services/FeedbackService"

export default function FeedbackIconButton({ isLiked }: { isLiked: boolean }) {
  const page = useStoreState((state) => state.session.page)
  const setVoted = useStoreActions((actions) => actions.session.setPageVoted)
  const handleFeedback = async (isLiked: boolean): Promise<void> => {
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
