import { Center, Link, Text } from "@chakra-ui/react"
import { store } from "../../../store/store"
import { ModalsStoreModel } from "../../../store/modals"
import { humanize } from "../../../lib/strings"
import React from "react"

interface ModalLinkProps {
  modal: keyof ModalsStoreModel
}

/**
 * Modal Link holder used to display clickable options in the footer
 * that will open up relevant modals
 * @param modal - a key of ModalsStoreModel
 * @constructor
 */
export default function ModalLink({ modal }: ModalLinkProps) {
  const toggle: () => void = store.dispatch.modals[modal].onOpen
  return (
    <Center>
      <Link onClick={toggle}>
        <Text fontSize={["xs", "md"]} as="b">
          {humanize(modal)}
        </Text>
      </Link>
    </Center>
  )
}
