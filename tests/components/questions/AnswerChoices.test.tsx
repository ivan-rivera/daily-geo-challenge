import renderWithStore from "../../renderWithStore"
import {
  inProgressCorrect,
  inProgressIncorrect,
  inProgressUnanswered,
} from "../../../lib/mocks/states"
import QuestionNav from "../../../components/questions/QuestionNav"
import AnswerChoices from "../../../components/questions/AnswerChoices"
import { fireEvent, screen } from "@testing-library/react"

export {}

describe("AnswerChoices tests", () => {
  const dummyChoices = {
    ABC: { letter: "A", correct: false },
    DEF: { letter: "B", correct: true },
    GHI: { letter: "C", correct: false },
    JKL: { letter: "D", correct: false },
  }
  it("should render the button as enabled after selecting an answer", () => {
    renderWithStore(inProgressUnanswered)(<QuestionNav infoUrl="" />)
    renderWithStore(inProgressUnanswered)(
      <AnswerChoices choices={dummyChoices} />
    )
    const submit = screen.getByTestId("submitAnswerButton")
    expect(submit).toBeDisabled
    fireEvent.click(screen.getByTestId("answer-choice-A"))
    expect(submit).not.toBeDisabled
  })
  it("should display correct and incorrect options when the answer is wrong", () => {
    renderWithStore(inProgressIncorrect)(
      <AnswerChoices choices={dummyChoices} />
    )
    const correct = screen.getByTestId("correctMark")
    const incorrect = screen.getByTestId("incorrectMark")
    expect(correct).toBeInTheDocument
    expect(incorrect).toBeInTheDocument
  })
  it("should display the correct option only when the answer is correct", () => {
    renderWithStore(inProgressCorrect)(<AnswerChoices choices={dummyChoices} />)
    const correct = screen.getByTestId("correctMark")
    expect(correct).toBeInTheDocument
  })
})
