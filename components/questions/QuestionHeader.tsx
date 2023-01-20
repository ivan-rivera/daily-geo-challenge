import { Stack, Text } from "@chakra-ui/react"
import { QuestionIcon } from "@chakra-ui/icons"

/**
 * Displaying a question icon and question text
 * @constructor
 */
export default function QuestionHeader() {
  return (
    <Stack
      display="flex"
      justifyContent="space-between"
      direction="row"
      bg="quarternary"
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
      p={2}
    >
      <QuestionIcon boxSize={10} color="secondary" />
      <Text color="secondary" fontSize="2xl" mx="auto">
        Question
      </Text>
    </Stack>
  )
}
