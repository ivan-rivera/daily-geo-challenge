import { humanize } from "../../lib/strings"

describe("string manipulation tests", () => {
  it("should humanize camel cased text", () => {
    expect(humanize("helloWorld")).toBe("Hello World")
    expect(humanize("hello")).toBe("Hello")
    expect(humanize("WORLD")).toBe("WORLD")
    expect(humanize("x")).toBe("X")
  })
})
