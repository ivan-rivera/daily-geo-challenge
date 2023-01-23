declare module "*.md"
declare global {
  type Reducer<T> = (items: T[]) => T
  type DataKey = string
  type DataValue = string | number
  type Datapoints = Record<DataKey, DataValue>
  type Choices = Record<DataKey, { correct: boolean; letter: string }>
  type NavStatusColour = "success" | "error" | "background"
  type ChoiceStatusColour = "success" | "error" | "secondary"

  type NumericSelectionStrategy = "min" | "max"
  type GenericSelectionStrategy = "random"
  type SelectionStrategy = NumericSelectionStrategy | GenericSelectionStrategy
  type SelectionStrategyResolvers = {
    [key in SelectionStrategy]: (data: Datapoints) => [DataValue, Choices]
  }

  // export enum AnswerStatus {
  //   Unanswered,
  //   Correct,
  //   Incorrect,
  // }

  interface StaticProps {
    quizId: number
    questions: QuestionData[]
    time: Date
  }

  interface QuestionBlueprint {
    id: number
    revision: number
    select: SelectionStrategy
    link: string
    question: string
    data: Datapoints
    image: boolean
  }

  interface QuestionData {
    id: number
    link: string
    question: string
    choices: Choices
    image: string | null
  }
}
export {}
