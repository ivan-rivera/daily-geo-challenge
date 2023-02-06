import NavBar from "../../components/navigation/NavBar"
import { ComponentMeta } from "@storybook/react"
import { storeTemplate } from "../lib/decorators"
import { completedSummary, inProgressCorrect } from "../../lib/mocks/states"

export default {
  title: "Components/Nav Bar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>

export const InProgress = storeTemplate(inProgressCorrect)
export const Completed = storeTemplate(completedSummary)
