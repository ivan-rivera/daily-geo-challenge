import { Card, CardFooter, Stack, Text } from "@chakra-ui/react"
import PlayButton from "../forms/PlayButton"
import { useStoreState } from "../../store/store"
import { BOX_BORDER_RADIUS } from "../../lib/constants"
import React from "react"

const dailyScoreAvailable = (value: string): boolean => value != "TBD"

/**
 * Welcome screen footer
 * @constructor
 */
export default function WelcomeFooter() {
  const quizId = useStoreState((state) => state.session.quizId)
  const dailyScore = useStoreState((state) => state.session.dailyScore)
  return (
    <Card
      bg="secondary"
      color="quarternary"
      borderBottomRadius={BOX_BORDER_RADIUS}
    >
      <CardFooter>
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          mx={[0, 1, 5]}
        >
          <Stack direction="column" align="self-start" justifyContent="center">
            <Text fontSize={["base", "xl", "2xl"]} as="b">
              Quiz #{quizId}
            </Text>
            {dailyScoreAvailable(dailyScore) && (
              <Text data-testid="dailyScore" fontSize={["sm", "md", "xl"]}>
                Average score today: {dailyScore}
              </Text>
            )}
          </Stack>
          <PlayButton />
        </Stack>
      </CardFooter>
    </Card>
  )
}
