import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/react";
import React from "react";
import { ModalsStoreModel } from "../../store/modals";
import { useStoreActions, useStoreState } from "../../store/store";

interface ModalProps {
  title: string;
  toggle: keyof ModalsStoreModel;
  children: React.ReactNode;
}

/**
 * Generic modal frame
 * @param title - title of the modal
 * @param toggle - key of the corresponding modal object in the store
 * @param children - children to be displayed in the modal
 * @constructor
 */
export default function GenericModal({ title, toggle, children }: ModalProps) {
  const isOpen = useStoreState((state) => state.modals[toggle].isOpen);
  const onClose: () => void = useStoreActions(
    (actions) => actions.modals[toggle].onClose
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="background" color="tertiary" borderRadius={15}>
        <ModalHeader
          bg="quarternary"
          color="primary"
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color="background" />
        <ModalBody px={10}>{children}</ModalBody>
        <ModalFooter>
          <Button bg="quarternary" color="primary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
