import ModalLink from "./ModalLink"
import { Stack } from "@chakra-ui/react"
import { modalsStore, ModalsStoreModel } from "../../../store/modals"

/**
 * Collection of modal links that are meant to be accessed from the footer
 * These links open modals such as "about", "contact", etc
 * @constructor
 */
export default function ModalLinks() {
  return (
    <Stack direction="row" spacing="30px" color="quarternary">
      {Object.keys(modalsStore).map((key) => (
        <ModalLink key={key} modal={key as keyof ModalsStoreModel} />
      ))}
    </Stack>
  )
}
