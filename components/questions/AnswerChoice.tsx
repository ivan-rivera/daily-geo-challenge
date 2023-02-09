import React from "react"
import { Box, Circle, Flex, Text } from "@chakra-ui/react"
import { BOX_BORDER_RADIUS } from "../../lib/constants"
import { useStoreState } from "../../store/store"

interface AnswerChoiceProps {
  enumerator: string
  label: string
  voteProp: number | null
  colour: ChoiceStatusColour
  icon: JSX.Element
  isSelected: boolean
  onClick: () => void
}

/**
 * A single available choice
 * @constructor
 */
export default function AnswerChoice({
  enumerator,
  label,
  voteProp,
  colour,
  icon,
  isSelected,
  onClick,
}: AnswerChoiceProps) {
  const isAnswered = useStoreState((state) => state.session.pageIsAnswered)
  const votesAvailable = voteProp !== null
  const votePropString = votesAvailable ? (voteProp * 100).toFixed(0) : ""
  return (
    <Flex
      bg={isSelected ? "tertiary" : "quarternary"}
      justifyContent="space-between"
      alignItems="center"
      borderRadius={BOX_BORDER_RADIUS}
      w="300px"
      as="button"
      p={2}
      data-testid={`answer-choice-${enumerator}`}
      onClick={() => (!isAnswered ? onClick() : () => {})}
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Circle mr={2} size={8} bg="secondary" color="quarternary">
          {enumerator}
        </Circle>
        <Text color={colour} fontSize="md">
          {label} {isAnswered && votesAvailable && `(${votePropString}%)`}
        </Text>
      </Flex>
      <Box color={colour} display={isAnswered ? "block" : "none"}>
        {React.cloneElement(icon, {})}
      </Box>
    </Flex>
  )
}
