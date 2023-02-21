import { Flex, Text } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Button from "../forms/Button"
import NavButton from "../forms/NavButton"
import getConfig from "next/config"
import { useStoreActions, useStoreState } from "../../store/store"
import Link from "next/link"
import AnswerStatus from "../../lib/AnswerStatus"
import StatsService from "../../services/StatsService"
import AnalyticsService from "../../services/AnalyticsService"
import React from "react"

const { publicRuntimeConfig } = getConfig()

/**
 * Question navigation controls (next, previous, submit)
 * @constructor
 */
export default function QuestionNav({ infoUrl }: { infoUrl: string }) {
  const page = useStoreState((state) => state.session.page)
  const question = useStoreState((state) => state.session.pageQuestion)
  const setPage = useStoreActions((actions) => actions.session.setPage)
  const pick = useStoreState((state) => state.session.pagePick)
  const setAnswer = useStoreActions((state) => state.session.setPageAnswer)
  const answerStatus = useStoreState((state) => state.session.pageAnswer)
  const availablePages = useStoreState((state) => {
    return publicRuntimeConfig.questions + (state.session.isFinished ? 1 : 0)
  })
  const selectedIsCorrect = useStoreState(
    (state) => state.session.isCorrectPagePick
  )
  const handleSubmit = (): void => {
    setAnswer(selectedIsCorrect ? AnswerStatus.Correct : AnswerStatus.Incorrect)
    AnalyticsService.logEvent("level_end", {
      level_name: page,
      is_correct: +selectedIsCorrect,
      question_id: question.id,
    })
    StatsService.submitAnswer(page, pick)
      .then()
      .catch((e) => console.error("failed to submit answer to server: ", e))
  }
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      m={5}
    >
      <NavButton
        data-testid="backButton"
        disabled={page === 1}
        aria-label="previous"
        icon={<ChevronLeftIcon />}
        onClick={() => setPage(page - 1)}
      />
      {answerStatus !== AnswerStatus.Unanswered ? (
        <Link href={infoUrl}>
          <Text color="quarternary" as="u">
            Learn more here
          </Text>
        </Link>
      ) : (
        <Button
          data-testid="submitAnswerButton"
          onClick={handleSubmit}
          disabled={pick === ""}
        >
          Submit
        </Button>
      )}
      <NavButton
        data-testid="forwardButton"
        disabled={page === availablePages}
        aria-label="next"
        icon={<ChevronRightIcon />}
        onClick={() => setPage(page + 1)}
      />
    </Flex>
  )
}
