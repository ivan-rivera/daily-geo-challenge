import { screen } from "@testing-library/react"
import renderWithStore from "../../renderWithStore"
import Contact from "../../../components/forms/Contact"

describe("Contact form tests", () => {
  const textFn = jest.fn()
  renderWithStore()(<Contact title="test" onClick={textFn} />)
  const submitButton = screen.getByTestId("submitContactButton")
  it("Should first render the button as disabled", () => {
    expect(submitButton).toBeDisabled
  })
})
