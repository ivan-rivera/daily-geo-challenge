import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import Button from "components/forms/Button"
import React from "react"
import { ModalsStoreModel } from "../../store/modals"
import { store, useStoreState } from "../../store/store"
import { BOX_BORDER_RADIUS } from "../../lib/constants"
import { humanize } from "lib/strings"

interface ModalProps {
  toggle: keyof ModalsStoreModel
  children: React.ReactNode
}

/**
 * Generic modal frame
 * @param toggle - key of the corresponding modal object in the store
 * @param children - children to be displayed in the modal
 * @constructor
 */
export default function GenericModal({ toggle, children }: ModalProps) {
  const isOpen = useStoreState((state) => state.modals[toggle].isOpen)
  const onClose: () => void = store.dispatch.modals[toggle].onClose

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="background"
        color="tertiary"
        borderRadius={BOX_BORDER_RADIUS}
      >
        <ModalHeader
          bg="quarternary"
          color="primary"
          borderTopLeftRadius={BOX_BORDER_RADIUS}
          borderTopRightRadius={BOX_BORDER_RADIUS}
        >
          {humanize(toggle)}
        </ModalHeader>
        <ModalCloseButton color="background" />
        <ModalBody px={10}>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
