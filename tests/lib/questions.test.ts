import { sampleQuestions } from "../../lib/questions/sampling"
import { getDuplicates } from "../support"
import data from "../../lib/questions/bank"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

function resolveMinOrMax(
  strategy: "min" | "max"
): [Record<string, boolean>, number] {
  const target = data.filter((d) => d.select === strategy)[0]
  const opts = sampleQuestions([target], 1)[0].choices
  const markedValues = Object.fromEntries(
    Object.keys(opts).map((k) => {
      return [target.data[k], opts[k].correct]
    })
  )
  const fn = strategy === "min" ? Math.min : Math.max
  const selected = fn(...Object.keys(markedValues).map((k) => Number(k)))
  return [markedValues, selected]
}

describe("question sampling tests", () => {
  const questions = sampleQuestions()

  it("should sample N questions from the bank", () => {
    console.log(publicRuntimeConfig)
    expect(questions).toHaveLength(publicRuntimeConfig.questions)
  })

  it("should ensure that all values per question are unique", () => {
    questions.forEach((q) => {
      const options = getDuplicates(Object.keys(q.choices))
      expect(options).toHaveLength(0)
    })
  })

  it("should ensure that all question IDs are unique", () => {
    const duplicates = getDuplicates(questions.map((q) => q.id))
    expect(duplicates).toHaveLength(0)
  })

  it("should ensure that question text does not contain placeholders", () => {
    questions.forEach((q) => {
      expect(q.question).not.toMatch(/\{|\}/)
    })
  })

  it("should correctly resolve min strategy", () => {
    const [markedMinValues, min] = resolveMinOrMax("min")
    expect(markedMinValues[min]).toBe(true)
  })

  it("should correctly resolve max strategy", () => {
    const [markedMaxValues, max] = resolveMinOrMax("max")
    expect(markedMaxValues[max]).toBe(true)
  })
})
