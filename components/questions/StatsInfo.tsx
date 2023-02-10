import { Text, HStack, Center } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"
import React from "react"

export function StatsInfo() {
  return (
    <Center mt={5} color="quarternary">
      <HStack>
        <InfoIcon />
        <Text>% next to each choice show others picks</Text>
      </HStack>
    </Center>
  )
}
