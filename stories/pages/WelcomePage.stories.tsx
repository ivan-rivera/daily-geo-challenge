import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withLayout } from "../../components/root/Layout"
import Welcome from "../../components/welcome/Welcome"

/**
 * Home page
 */
export default {
  title: "Pages/Home Page",
  component: Welcome,
  decorators: [withLayout],
} as ComponentMeta<typeof Welcome>

const Template: ComponentStory<typeof Welcome> = () => <Welcome />
export const Default = Template.bind({})
