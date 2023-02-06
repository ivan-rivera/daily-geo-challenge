import { ComponentMeta } from "@storybook/react"
import { storeTemplate } from "../lib/decorators"
import { howItWorksModalOpen } from "../../lib/mocks/states"
import HowItWorksModal from "../../components/modals/HowItWorks"

export default {
  title: "Components/Modal - How It Works",
  component: HowItWorksModal,
} as ComponentMeta<typeof HowItWorksModal>

export const Default = storeTemplate(howItWorksModalOpen)
