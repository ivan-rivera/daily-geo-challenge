import { IconButton } from "@chakra-ui/react"
import { IconThumbDown, IconThumbUp } from "@tabler/icons"
import { useStoreActions } from "../../store/store"

export default function FeedbackIconButton({ isLiked }: { isLiked: boolean }) {
  const setVoted = useStoreActions((actions) => actions.session.setPageVoted)
  const handleFeedback = (isLiked: boolean): void => {
    // TODO: submit data to server
    setVoted(isLiked)
    console.log("clicked", isLiked)
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
