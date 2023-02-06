import { sampleSize } from "lodash"
import { selectionResolvers } from "./selection"
import bank from "./bank"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

/**
 * Given a data object containing keys and values, take a random sample of
 * N elements and return another object with N keys and their corresponding
 * values
 * @param data - a record with keys and values
 * @param n - number of items to retain from the data object
 */
const sampleData = (
  data: Datapoints,
  n: number = publicRuntimeConfig.choices
): Datapoints =>
  sampleSize(Object.keys(data), n).reduce((acc, key) => {
    return { ...acc, [key]: data[key] }
  }, {})

/**
 * Given a question blueprint, prepare a question by selecting the correct answer
 * @param question
 */
const askQuestion = (question: QuestionBlueprint): QuestionData => {
  const sampledData = sampleData(question.data)
  const [target, choices] = selectionResolvers[question.select](sampledData)
  const editedQuestion = question.question.replace(
    "{{ key }}",
    target as string
  )
  return {
    id: question.id,
    link: question.link,
    question: editedQuestion,
    image: question.image ? (target as string) : null,
    choices,
  }
}

/**
 * Sample a random collection of questions from the bank
 */
export const sampleQuestions = (
  data: QuestionBlueprint[] = bank,
  n: number = publicRuntimeConfig.questions
): QuestionData[] => sampleSize(data, n).map((q) => askQuestion(q))
