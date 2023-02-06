// TODO: test session (isFinished, yourScore, shareScore)
import { completedSummary, inProgressUnanswered } from "../../lib/mocks/states"

describe("session state", () => {
  it("should render completed as true when all questions are answered", () => {
    expect(completedSummary.getState().session.isFinished).toBe(true)
  })
  it("should render completed as false when some questions are unanswered", () => {
    expect(inProgressUnanswered.getState().session.isFinished).toBe(false)
  })
})
