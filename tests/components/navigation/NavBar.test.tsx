import "@testing-library/jest-dom"
import NavBar from "../../../components/navigation/NavBar"
import renderWithStore from "../../renderWithStore"
import { screen } from "@testing-library/react"
import { completedSummary } from "../../../lib/mocks/states"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()
describe("NavBar tests", () => {
  it("should not display summary when the game is in progress", () => {
    renderWithStore()(<NavBar />)
    const main = screen.getAllByTestId("NavCell")
    expect(main).toHaveLength(publicRuntimeConfig.questions)
  })
  it("should display the summary tab when the game is finished", () => {
    renderWithStore(completedSummary)(<NavBar />)
    const main = screen.getAllByTestId("NavCell")
    expect(main).toHaveLength(publicRuntimeConfig.questions + 1)
  })
})
