import GenericModal from "./GenericModal"
import Article from "content/modals/howItWorks.mdx"

/**
 * "How It Works" modal
 * TODO: add reference to the database
 * @constructor
 */
export default function HowItWorksModal() {
  return (
    <GenericModal toggle="howItWorks">
      <Article />
    </GenericModal>
  )
}
