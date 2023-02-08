import { completedSummary, inProgressUnanswered } from "../../lib/mocks/states"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
describe("session state", () => {
  it("should render completed as true when all questions are answered", () => {
    expect(completedSummary.getState().session.isFinished).toBe(true)
  })
  it("should render completed as false when some questions are unanswered", () => {
    expect(inProgressUnanswered.getState().session.isFinished).toBe(false)
  })
  it("should correctly summarise the score", () => {
    const actualScore = completedSummary.getState().session.yourScore
    const correctAnswers = completedSummary.getState().session.totalCorrect
    const totalQuestions = completedSummary.getState().session.questions.length
    const prop = Math.floor((correctAnswers / totalQuestions) * 100)
    expect(actualScore).toBe(prop.toString() + "%")
  })
  it("should correctly print sharable score", () => {
    const sharableScore = completedSummary.getState().session.shareScore
    expect(sharableScore.split("\n")[1]).toHaveLength(
      publicRuntimeConfig.questions * 2
    )
    expect(sharableScore.includes(publicRuntimeConfig.title)).toBe(true)
    expect(sharableScore.includes(publicRuntimeConfig.url)).toBe(true)
    expect(sharableScore.includes(publicRuntimeConfig.hashtag)).toBe(true)
  })
})
