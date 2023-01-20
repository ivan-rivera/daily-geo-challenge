import { ComponentMeta } from "@storybook/react"
import { storeTemplate } from "../lib/decorators"
import { contactModalOpen } from "../lib/states"
import ContactModal from "../../components/modals/Contact"

export default {
  title: "Components/Modal - Contact",
  component: ContactModal,
} as ComponentMeta<typeof ContactModal>

export const Default = storeTemplate(contactModalOpen)
