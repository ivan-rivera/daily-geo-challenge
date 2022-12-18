import { Text, CardFooter, Stack } from "@chakra-ui/react";
import PlayButton from "./PlayButton";

/**
 * Welcome screen footer
 * @constructor
 * TODO:
 *  - Add transitions to the welcome items
 *  - Replace quiz number with a value from the server
 *  - Replace average score with a value from the server
 *  - Make average score display conditional on count of scores completed (set threshold in config)
 */
export default function WelcomeFooter() {
  return (
    <CardFooter
      bg="secondary"
      color="quarternary"
      borderBottomLeftRadius={15}
      borderBottomRightRadius={15}
    >
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Stack direction="column" align="self-start" justifyContent="center">
          <Text fontSize={["xl", "2xl"]} as="b">
            Quiz #1
          </Text>
          <Text fontSize={["base", "xl"]}>Average score today: 76%</Text>
        </Stack>
        <PlayButton />
      </Stack>
    </CardFooter>
  );
}
