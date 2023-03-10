import React from "react"
import { Box, Text, Textarea } from "@chakra-ui/react"
import Button from "../forms/Button"
import { ChangeEvent, ChangeEventHandler, useState } from "react"

interface ContactProps {
  title: string
  onClick: (message: string) => void
}

/**
 * General contact form component which contains a title, text area and a button
 * @param onClick
 * @param title
 * @constructor
 */
export default function Contact({ onClick, title }: ContactProps) {
  const [text, setText] = useState("")
  const handleInputChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ): void => setText(e.target.value)
  return (
    <Box maxW="lg" mx="auto" px={2}>
      <Text fontSize="lg" color="quarternary" textAlign="left">
        {title}
      </Text>
      <Textarea
        value={text}
        onChange={handleInputChange}
        mx="auto"
        maxW="lg"
        bg="secondary"
        color="quarternary"
        _hover={{ bg: "secondary" }}
        variant="filled"
        placeholder="I suggest..."
        data-testid="contactTextArea"
      />
      <br />
      <Button
        data-testid="submitContactButton"
        isDisabled={text === ""}
        display="block"
        ml="auto"
        mr={0}
        my={5}
        onClick={() => onClick(text)}
      >
        Submit
      </Button>
    </Box>
  )
}
