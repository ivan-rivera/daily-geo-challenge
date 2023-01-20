import { Flex, Text } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Button from "../forms/Button"
import NavButton from "../forms/NavButton"
import getConfig from "next/config"
import { useStoreActions, useStoreState } from "../../store/store"
import { AnswerStatus } from "../../lib/types"
import Link from "next/link"

const { publicRuntimeConfig } = getConfig()

/**
 * Question navigation controls
 * @constructor
 */
export default function QuestionNav({ infoUrl }: { infoUrl: string }) {
  const page = useStoreState((state) => state.session.page)
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
    // TODO: submit data to backend
    setAnswer(selectedIsCorrect ? AnswerStatus.Correct : AnswerStatus.Incorrect)
  }
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      m={5}
    >
      <NavButton
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
        <Button onClick={handleSubmit} disabled={pick === ""}>
          Submit
        </Button>
      )}
      <NavButton
        disabled={page === availablePages}
        aria-label="next"
        icon={<ChevronRightIcon />}
        onClick={() => setPage(page + 1)}
      />
    </Flex>
  )
}
