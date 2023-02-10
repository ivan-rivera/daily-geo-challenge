import { Box, HStack, Text } from "@chakra-ui/react"
import FeedbackIconButton from "../forms/FeedbackIconButton"
import { useStoreState } from "../../store/store"
import React from "react"

export default function Feedback() {
  const voted = useStoreState((state) => state.session.pageVoted)
  return (
    <Box
      display={voted ? "none" : "block"}
      mx="auto"
      color="quarternary"
      mb={5}
    >
      <Text fontSize="2xl">Did you enjoy this quiz?</Text>
      <HStack
        mx="auto"
        maxW={100}
        display="flex"
        justifyContent="space-between"
      >
        <FeedbackIconButton isLiked={false} />
        <FeedbackIconButton isLiked={true} />
      </HStack>
    </Box>
  )
}
