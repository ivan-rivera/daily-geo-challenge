import React from "react"
import { IconButton, IconButtonProps } from "@chakra-ui/react"
import { BUTTON_COLOURS } from "../../lib/constants"

/**
 * Navigation button that can be used to move forward and backward
 * @param props
 * @constructor
 */
export default function NavButton(props: IconButtonProps) {
  return <IconButton boxSize={10} {...BUTTON_COLOURS} {...props} />
}
