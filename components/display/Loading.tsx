import React from "react"
import { Box, keyframes, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`

export default function Loading() {
  return (
    <>
      <VStack my="auto">
        <Box
          as={motion.div}
          animation={`${animationKeyframes} 2s ease-in-out infinite`}
          my={20}
          padding="8"
          bgGradient="linear(to-l, primary, tertiary)"
          width="12"
          height="12"
          display="flex"
        />
        <Text my={8} fontSize="3xl">
          Loading...
        </Text>
      </VStack>
    </>
  )
}
