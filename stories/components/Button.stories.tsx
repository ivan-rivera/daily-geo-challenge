import Button from "../../components/forms/Button"
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button>Button</Button>
export const Default = Template.bind({})
