import ErrorPage, { ErrorPageProps } from "../../components/root/ErrorPage"
import { withLayout } from "../../components/root/Layout"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { code as code404, message as message404 } from "../../pages/404"
import { code as code500, message as message500 } from "../../pages/500"

export default {
  title: "Pages/Error Page",
  component: ErrorPage,
  decorators: [withLayout],
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = (args: ErrorPageProps) => (
  <ErrorPage {...args} />
)

export const PageNotFound404 = Template.bind({})
PageNotFound404.args = {
  code: code404,
  message: message404,
}

export const ServerError500 = Template.bind({})
ServerError500.args = {
  code: code500,
  message: message500,
}
