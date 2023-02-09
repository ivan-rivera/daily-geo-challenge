import { fireEvent, screen } from "@testing-library/react"
import renderWithStore from "../../renderWithStore"
import Contact from "../../../components/forms/Contact"

describe("Contact form tests", () => {
  const textData = "test"
  const textFn = jest.fn()
  renderWithStore()(<Contact title="test" onClick={textFn} />)
  const submitButton = screen.getByTestId("submitContactButton")
  const textArea = screen.getByTestId("contactTextArea")
  it("Should first render the button as disabled", () => {
    expect(submitButton).toBeDisabled
  })
  it("should correctly submit the form", () => {
    fireEvent.change(textArea, { target: { value: textData } })
    fireEvent.click(submitButton)
    expect(textFn).toHaveBeenCalledWith(textData)
  })
})
