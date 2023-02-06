import axios from "axios"
import { getDuplicates } from "../support"
import data from "../../lib/questions/bank"

describe("options must be unique", () => {
  data.forEach((q) => {
    it(`should have unique values for question ${q.id}`, () => {
      const duplicates = getDuplicates(Object.values(q.data))
      expect(duplicates).toHaveLength(0)
    })
  })
})

describe("images must be loaded correctly", () => {
  data.forEach((q) => {
    if (q.image) {
      it(`should have a valid image for question ${q.id}`, () => {
        Object.values(q.data).forEach(async (value) => {
          if (typeof value === "string") {
            const response = await axios.get(value)
            expect(response.status).toBe(200)
          }
        })
      })
    }
  })
})
