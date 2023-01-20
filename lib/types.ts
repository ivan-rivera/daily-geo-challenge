// Answer status to a question
export enum AnswerStatus {
  Unanswered,
  Correct,
  Incorrect,
}

export interface StaticProps {
  quizId: number
  dailyScore: number
  questions: QuestionData[]
  time: Date
}

export type NavStatusColour = "success" | "error" | "background"
export type ChoiceStatusColour = "success" | "error" | "secondary"

export type DataKey = string
export type DataValue = string | number
export type Reducer<T> = (items: T[]) => T

// Format of the raw data stored in data/*.json
export type Datapoints = Record<DataKey, DataValue>

// A dictionary with possible answers and whether the answer is correct
export type Choices = Record<DataKey, { correct: boolean; letter: string }>

// Possible strategy to select the correct answer
type NumericSelectionStrategy = "min" | "max"
type GenericSelectionStrategy = "random"
export type SelectionStrategy =
  | NumericSelectionStrategy
  | GenericSelectionStrategy

// This type contains selection strategies and their matching answer resolver functions
// Each resolver function takes Datapoints and returns a tuple of choice, which is
// the target value that corresponds to the correct answer and a dictionary where the keys
// are possible choices while the values are boolean indicating whether the choice is correct
export type SelectionStrategyResolvers = {
  [key in SelectionStrategy]: (data: Datapoints) => [DataValue, Choices]
}

// A data structure representing a question blueprint
export interface QuestionBlueprint {
  id: number
  revision: number
  select: SelectionStrategy
  link: string
  question: string
  data: Datapoints
  image: boolean
}

// A data structure representing a prepared question together with possible answers and the metadata
export interface QuestionData {
  id: number
  link: string
  question: string
  choices: Choices
  image: string | null
}

export interface Pick {
  option: string
  correct: boolean
  stage: "selected" | "answered"
}

// TODO: write docs for these types
