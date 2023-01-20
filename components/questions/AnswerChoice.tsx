import React from "react"
import { Box, Circle, Flex, Text } from "@chakra-ui/react"
import { BOX_BORDER_RADIUS } from "../../lib/constants"
import { useStoreState } from "../../store/store"
import { ChoiceStatusColour } from "../../lib/types"

interface AnswerChoiceProps {
  enumerator: string
  label: string
  colour: ChoiceStatusColour
  icon: JSX.Element
  isSelected: boolean
  onClick: () => void
}

/**
 * A single available choice
 * // TODO: add choice stats
 * @constructor
 */
export default function AnswerChoice({
  enumerator,
  label,
  colour,
  icon,
  isSelected,
  onClick,
}: AnswerChoiceProps) {
  const isAnswered = useStoreState((state) => state.session.pageIsAnswered)
  return (
    <Flex
      bg={isSelected ? "tertiary" : "quarternary"}
      justifyContent="space-between"
      alignItems="center"
      borderRadius={BOX_BORDER_RADIUS}
      w="300px"
      as="button"
      p={2}
      onClick={() => (!isAnswered ? onClick() : () => {})}
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Circle mr={2} size={8} bg="secondary" color="quarternary">
          {enumerator}
        </Circle>
        <Text color={colour} fontSize="md">
          {label}
        </Text>
      </Flex>
      <Box color={colour} display={isAnswered ? "block" : "none"}>
        {React.cloneElement(icon, {})}
      </Box>
    </Flex>
  )
}
