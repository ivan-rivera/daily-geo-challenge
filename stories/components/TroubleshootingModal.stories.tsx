import { ComponentMeta } from "@storybook/react"
import { storeTemplate } from "../lib/decorators"
import { troubleshootingModalOpen } from "../lib/states"
import TroubleshootingModal from "../../components/modals/Troubleshooting"

export default {
  title: "Components/Modal - Troubleshooting",
  component: TroubleshootingModal,
} as ComponentMeta<typeof TroubleshootingModal>

export const Default = storeTemplate(troubleshootingModalOpen)
