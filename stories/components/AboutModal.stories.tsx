import AboutModal from "../../components/modals/About"
import { ComponentMeta } from "@storybook/react"
import { storeTemplate } from "../lib/decorators"
import { aboutModalOpen } from "../../lib/mocks/states"

export default {
  title: "Components/Modal - About",
  component: AboutModal,
} as ComponentMeta<typeof AboutModal>

export const Default = storeTemplate(aboutModalOpen)
