import { Box, Divider, Text } from "@chakra-ui/react"
import { useStoreState } from "../../store/store"
import React from "react"

/**
 * Displaying the user's score and the average score for the day
 * @constructor
 */
export default function ScoreReport() {
  const dailyScore = useStoreState((state) => state.session.dailyScore)
  const yourScore = useStoreState((state) => state.session.yourScore)
  return (
    <>
      <Divider color="quarternary" />
      <Box my={2} fontSize="xl" color="tertiary">
        <Text>
          Your score: <strong>{yourScore}</strong>
        </Text>
        <Text>
          Average score today: <strong>{dailyScore}</strong>
        </Text>
      </Box>
      <Divider color="quarternary" />
    </>
  )
}
