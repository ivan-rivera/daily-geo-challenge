import { ComponentMeta } from "@storybook/react"
import Welcome from "../../components/welcome/Welcome"
import { baseDecorators } from "../lib/decorators"
import { withDailyScore } from "../lib/states"

/**
 * Home page
 */
export default {
  title: "Pages/Home Page",
  component: Welcome,
} as ComponentMeta<typeof Welcome>

export const WithoutData = { decorators: baseDecorators() }
export const WithData = { decorators: baseDecorators(withDailyScore) }
