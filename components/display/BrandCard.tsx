import React from "react"
import { BOX_BORDER_RADIUS } from "../../lib/constants"
import { Card, Center, CardProps } from "@chakra-ui/react"

/**
 * Brand Card component with the colours and dimensions pre-configured
 * @param children
 * @param props - card props
 * @constructor
 */
export default function BrandCard({ children, ...props }: CardProps) {
  return (
    <Center mx="auto">
      <Card
        maxW="lg"
        minW={["0", "xs", "lg"]}
        mx={2}
        borderRadius={BOX_BORDER_RADIUS}
        border="1px"
        borderColor="tertiary"
        {...props}
      >
        {children}
      </Card>
    </Center>
  )
}
