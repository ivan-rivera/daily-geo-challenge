import React from "react"
import { Stack } from "@chakra-ui/react"
import AnswerChoice from "./AnswerChoice"
import { AnswerStatus, Choices, ChoiceStatusColour } from "../../lib/types"
import { store, useStoreState } from "../../store/store"
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons"

function getStatusProps(
  status: AnswerStatus,
  isSelected: boolean,
  isCorrect: boolean
): [ChoiceStatusColour, JSX.Element] {
  if (status !== AnswerStatus.Unanswered && isCorrect)
    return ["success", <CheckIcon color="success" key={0} />]
  if (status === AnswerStatus.Incorrect && isSelected)
    return ["error", <SmallCloseIcon color="error" key={0} />]
  return ["secondary", <></>]
}

/**
 * Available multi choice answers to the question
 * @constructor
 */
export default function AnswerChoices({ choices }: { choices: Choices }) {
  const answer = useStoreState((state) => state.session.pageAnswer)
  const picked = useStoreState((state) => state.session.pagePick)
  const questionStats = useStoreState((state) => state.session.questionStats)
  const questionHasStats = useStoreState(
    (state) => state.session.questionHasStats
  )
  return (
    <Stack mt={5} mx="auto" display="flex" justifyContent="center">
      {Object.keys(choices).map((label) => {
        const letter = choices[label].letter
        const isSelected = picked === letter
        const [textColour, StatusIcon] = getStatusProps(
          answer,
          isSelected,
          choices[label].correct
        )
        return (
          <AnswerChoice
            key={letter}
            enumerator={letter}
            label={label}
            voteProp={questionHasStats ? questionStats[letter] || 0 : null}
            colour={textColour}
            icon={StatusIcon}
            isSelected={isSelected}
            onClick={() => store.dispatch.session.setPagePick(letter)}
          />
        )
      })}
    </Stack>
  )
}
