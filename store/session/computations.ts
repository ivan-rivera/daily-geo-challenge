import { computed, State } from "easy-peasy"
import SessionStoreModel from "./types"
import getConfig from "next/config"
import { answerToEmoji, isCorrect } from "../../lib/scoring"
import AnswerStatus from "../../lib/AnswerStatus"

const { publicRuntimeConfig } = getConfig()

export const isFinished = computed((state: State<SessionStoreModel>) => {
  return (
    Object.values(state.answers).filter(
      (answer) => answer !== AnswerStatus.Unanswered
    ).length === publicRuntimeConfig.questions
  )
})

export const pagePick = computed(
  (state: State<SessionStoreModel>) => state.picks[state.page] || ""
)

export const pageQuestion = computed(
  (state: State<SessionStoreModel>) =>
    state.questions[state.page - 1] || ({} as QuestionData)
)

export const questionStats = computed(
  (state: State<SessionStoreModel>) => state.questionsStats[state.page] || {}
)

export const questionHasStats = computed(
  (state: State<SessionStoreModel>) =>
    Object.keys(state.questionStats).length > 0
)

export const pageAnswer = computed(
  (state: State<SessionStoreModel>) =>
    state.answers[state.page] || AnswerStatus.Unanswered
)

export const pageVoted = computed(
  (state: State<SessionStoreModel>) => state.voted[state.page]
)

export const isCorrectPagePick = computed((state: State<SessionStoreModel>) => {
  const choices = state.pageQuestion.choices || {}
  const selection = Object.values(choices).find(
    (choice) => choice.letter === state.pagePick
  )
  return selection?.correct || false
})

export const pageIsAnswered = computed(
  (state: State<SessionStoreModel>) =>
    state.pageAnswer !== AnswerStatus.Unanswered
)

export const yourScore = computed((state: State<SessionStoreModel>) => {
  const score =
    Object.values(state.answers).filter(
      (answer) => answer === AnswerStatus.Correct
    ).length / publicRuntimeConfig.questions
  return Math.floor(score * 100).toString() + "%"
})

/**
 * A string that represents shareable score. This string is intended to be shared via
 * social media through the Web Share API. This string consists of:
 *  - human-readable text
 *  - an emoji-based score where a correct answer is represented by a green square and a
 *    wrong answer is represented by a red square
 *  - A link to the quiz with an encouragement to take the quiz
 *  - A hashtag for the quiz
 */
export const shareScore = computed((state: State<SessionStoreModel>) => {
  const size = Object.keys(state.answers).length
  const emojis = Object.values(state.answers).map(answerToEmoji).join("")
  const score = Object.values(state.answers).filter(isCorrect).length / size
  const scoreStr = Math.floor(score * 100).toString() + "%"
  const header = `I got ${scoreStr} on ${publicRuntimeConfig.title}!`
  const callToAction = `Take the quiz yourself at ${publicRuntimeConfig.url}`
  return `${header}\n${emojis}\n${callToAction}\n${publicRuntimeConfig.hashtag}`
})
