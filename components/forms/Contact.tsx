import { Box, Text, Textarea } from "@chakra-ui/react"
import Button from "../forms/Button"

interface ContactProps {
  title: string
  onClick: () => void
}

export default function Contact({ onClick, title }: ContactProps) {
  return (
    <Box maxW="lg" mx="auto" px={2}>
      <Text fontSize="lg" color="quarternary" textAlign="left">
        {title}
      </Text>
      <Textarea
        mx="auto"
        maxW="lg"
        bg="secondary"
        color="quarternary"
        _hover={{ bg: "secondary" }}
        variant="filled"
        placeholder="I suggest..."
      />
      <br />
      <Button display="block" ml="auto" mr={0} my={5} onClick={onClick}>
        Submit
      </Button>
    </Box>
  )
}
