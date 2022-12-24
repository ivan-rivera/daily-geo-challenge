import React, { HTMLAttributes } from "react"
import { Button as ChakraButton, PropsOf } from "@chakra-ui/react"

/**
 * Button component props
 * @param children - button content
 * @param props - optional props that feed into the Chakra button
 */
type ButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, "children"> &
  PropsOf<typeof ChakraButton>

/**
 * Default button component
 * @param props
 * @constructor
 */
export default function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <ChakraButton
      color="secondary"
      bg="quarternary"
      _hover={{
        bg: "tertiary",
        color: "primary",
      }}
      {...otherProps}
    >
      {children}
    </ChakraButton>
  )
}
