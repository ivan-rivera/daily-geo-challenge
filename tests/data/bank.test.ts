/**
 * @jest-environment node
 */

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
