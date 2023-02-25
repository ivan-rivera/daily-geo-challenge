import { DatabaseReference } from "@firebase/database"
import { FirebaseOptions } from "@firebase/app"

declare module "*.md"
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}
declare global {
  type Reducer<T> = (items: T[]) => T
  type Page = number
  type QuestionStats = Record<DataKey, number>
  type QuestionsStats = Record<Page, QuestionStats>
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

  interface FirebaseDatabases {
    questionDb: DatabaseReference
    statsDb: DatabaseReference
    latestIdDb: DatabaseReference
    contactDb: DatabaseReference
  }

  interface DailyStats {
    games: number
    correct: number
    questions: number
  }

  interface StaticProps {
    fbOpts: FirebaseOptions
    gitHubToken: string
    quizId: number
    questions: QuestionData[]
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
