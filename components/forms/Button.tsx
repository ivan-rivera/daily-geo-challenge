import React from "react"
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react"
import { BUTTON_COLOURS } from "../../lib/constants"

/**
 * Default button component
 * @param props
 * @constructor
 */
export default function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <ChakraButton {...BUTTON_COLOURS} {...otherProps}>
      {children}
    </ChakraButton>
  )
}
