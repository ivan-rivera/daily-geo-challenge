import { CardFooter, Stack, Text } from "@chakra-ui/react"
import PlayButton from "../forms/PlayButton"
import { useStoreState } from "../../store/store"
import { getQuizId } from "../../lib/storage"

const dailyScoreAvailable = (value: string): boolean => value != "TBD"

/**
 * Welcome screen footer
 * @constructor
 */
export default function WelcomeFooter() {
  const dailyScore = useStoreState((state) => state.session.dailyScore)
  return (
    <CardFooter
      bg="secondary"
      color="quarternary"
      borderBottomLeftRadius={15}
      borderBottomRightRadius={15}
    >
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        mx={[0, 1, 5]}
      >
        <Stack direction="column" align="self-start" justifyContent="center">
          <Text fontSize={["base", "xl", "2xl"]} as="b">
            Quiz #{getQuizId()}
          </Text>
          {dailyScoreAvailable(dailyScore) && (
            <Text fontSize={["sm", "md", "xl"]}>
              Average score today: {dailyScore}
            </Text>
          )}
        </Stack>
        <PlayButton />
      </Stack>
    </CardFooter>
  )
}
