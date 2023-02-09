import { fireEvent, screen } from "@testing-library/react"
import renderWithStore from "../../renderWithStore"
import QuestionNav from "../../../components/questions/QuestionNav"
import { inProgressStart } from "../../../lib/mocks/states"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

describe("Question navigation tests", () => {
  it("should be able to move back and forward from the beginning to end", () => {
    renderWithStore(inProgressStart)(<QuestionNav infoUrl="" />)
    const back = screen.getByTestId("backButton")
    const forward = screen.getByTestId("forwardButton")
    expect(back).toBeDisabled
    for (let page = 1; page < publicRuntimeConfig.questions - 1; page++) {
      expect(forward).not.toBeDisabled
      fireEvent.click(forward)
    }
    expect(forward).toBeDisabled
  })
})
