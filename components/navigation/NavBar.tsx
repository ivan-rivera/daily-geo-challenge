import { Center, Flex, Stack, Text } from "@chakra-ui/react"
import getConfig from "next/config"
import NavCell from "./NavCell"
import { useStoreState } from "../../store/store"
import { getQuizId } from "../../lib/storage"
import React from "react"

const { publicRuntimeConfig } = getConfig()

/**
 * Progress bar
 * This component displays boxes, one for each question in the questionnaire
 * together with the status of each question (answered correctly, answered
 * incorrectly or unanswered) as well as the current position (focus). This
 * component can be used to navigate around the page.
 * @constructor
 */
export default function NavBar() {
  const isFinished = useStoreState((state) => state.session.isFinished)
  const page = useStoreState((state) => state.session.page)
  const displayPage = 0 < page && page <= publicRuntimeConfig.questions
  const questionArray = Array(
    publicRuntimeConfig.questions + (isFinished ? 1 : 0)
  )
  const pageDescription = `Question ${page} of ${publicRuntimeConfig.questions}`
  return (
    <Center py={2}>
      <Stack direction="column">
        <Flex justifyContent="space-between" color="quarternary">
          <Text>{displayPage && pageDescription}</Text>
          <Text>Quiz #{getQuizId()}</Text>
        </Flex>
        <Flex>
          {Array.from(questionArray.keys()).map((i) => {
            return <NavCell key={i + 1} id={i + 1} />
          })}
        </Flex>
      </Stack>
    </Center>
  )
}
