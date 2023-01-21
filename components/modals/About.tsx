import GenericModal from "./GenericModal"
import Article from "content/modals/about.mdx"

/**
 * "About" modal
 * @constructor
 */
export default function AboutModal() {
  return (
    <GenericModal toggle="about">
      <Article />
    </GenericModal>
  )
}
