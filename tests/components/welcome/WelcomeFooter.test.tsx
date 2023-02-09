import { screen } from "@testing-library/react"
import renderWithStore from "../../renderWithStore"
import WelcomeFooter from "../../../components/welcome/WelcomeFooter"
import { withDailyScore } from "../../../lib/mocks/states"

describe("WelcomeFooter tests", () => {
  it("Should display daily score when it is available", () => {
    renderWithStore(withDailyScore)(<WelcomeFooter />)
    const dailyScore = screen.getByTestId("dailyScore")
    expect(dailyScore).toBeDefined()
  })
  it("Should not display daily score when it is not available", () => {
    renderWithStore()(<WelcomeFooter />)
    const dailyScore = screen.queryByTestId("dailyScore")
    expect(dailyScore).toBeNull()
  })
})
