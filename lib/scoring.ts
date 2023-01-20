import { AnswerStatus } from "./types"

/**
 * Convert an answer into an emoji
 * @param answer
 */
export const answerToEmoji = (answer: AnswerStatus): string =>
  answer === AnswerStatus.Correct ? "🟩" : "🟥"

/**
 * Check if an answer is correct
 * @param answer
 */
export const isCorrect = (answer: AnswerStatus): boolean =>
  answer === AnswerStatus.Correct
