import GenericModal from "./GenericModal"
import Article from "content/modals/troubleshooting.mdx"

/**
 * "Troubleshooting" modal
 * @constructor
 */
export default function TroubleshootingModal() {
  return (
    <GenericModal toggle="troubleshooting">
      <Article />
    </GenericModal>
  )
}
