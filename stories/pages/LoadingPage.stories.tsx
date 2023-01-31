import Loading from "../../components/display/Loading"
import { ComponentMeta } from "@storybook/react"
import { baseDecorators } from "../lib/decorators"

export default {
  title: "Pages/Loading Page",
  component: Loading,
  decorators: baseDecorators(),
} as ComponentMeta<typeof Loading>

export const Default = {}
