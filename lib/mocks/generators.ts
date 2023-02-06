import { sample } from "lodash"
import getConfig from "next/config"
import assert from "assert"
import AnswerStatus from "../AnswerStatus"

const { publicRuntimeConfig } = getConfig()

/**
 * Generate a sample of answers
 * @param n
 */
export const generateAnswers = (
  n: number = publicRuntimeConfig.questions
): Record<number, AnswerStatus> => {
  const answerStatuses = [1, 2] as AnswerStatus[]
  return Array.from({ length: n }, (_, i) => ({
    [i + 1]: sample(answerStatuses) as AnswerStatus,
  })).reduce((acc, cur) => ({ ...acc, ...cur }), {})
}

/**
 * Given an integer n and an object of correct and incorrect answers,
 * append n unanswered answers to the object continuing the key order
 * @param answers
 * @param n
 */
export const appendUnanswered = (
  answers: Record<number, AnswerStatus>,
  n: number
): Record<number, AnswerStatus> => {
  const unansweredAnswers = Array.from(
    { length: n },
    (_, i) => i + Object.keys(answers).length + 1
  ).reduce((acc, cur) => ({ ...acc, [cur]: AnswerStatus.Unanswered }), {})
  return { ...answers, ...unansweredAnswers }
}

/**
 * Given the desired number of unanswered pages, create a list of AnswerStatus
 * values such that:
 *   - The last `unanswered` values are `AnswerStatus.Unanswered`
 *   - The previous two values are `AnswerStatus.Correct` and `AnswerStatus.Incorrect` respectively
 *   - All previous values (the first `n - 2 - unanswered` values) are randomly sampled from `AnswerStatus`
 * @param unanswered: number unanswered questions to attach to the end
 * @return a tuple consisting of:
 *   - page number corresponding to the correct answer
 *   - page number corresponding to incorrect answer
 *   - page number corresponding to either unanswered question or summary
 *   - object with AnswerStatus values and pages as keys
 */
export const createQuestionList = (
  unanswered: number = 0
): readonly [number, number, number, Record<number, AnswerStatus>] => {
  const n = publicRuntimeConfig.questions - unanswered - 2
  assert(n > 0, "N is below zero, check config or unanswered value")
  const answers = appendUnanswered(
    {
      ...generateAnswers(n),
      [n + 1]: AnswerStatus.Correct,
      [n + 2]: AnswerStatus.Incorrect,
    },
    unanswered
  )
  return [n + 1, n + 2, n + 3, answers] as const
}

/**
 * Generate a list of questions where only one value will be of interest
 */
export const createQuestions =
  (fill: QuestionData, size: number = publicRuntimeConfig.questions) =>
  (page: number, target: QuestionData): QuestionData[] => {
    return Array.from({ length: size }, (_, i) => {
      if (i + 1 === page) return target
      return fill
    })
  }
