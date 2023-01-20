import Image from "next/image"
import {
  Box,
  Center,
  Spinner,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface QuestionPromptProps {
  question: string
  image: string | null
}

/**
 * Question Prompt
 * This component displays the question with a supplementary icon,
 * and it may also display an image if one comes with the question
 * @constructor
 */
export default function QuestionPrompt({
  question,
  image,
}: QuestionPromptProps) {
  const { colorMode } = useColorMode()
  const [src, setSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => setSrc(image), [image])
  return (
    <Stack display="flex" justifyContent="center" direction="column" m={5}>
      <Text fontSize="2xl" color="quarternary">
        {question}
      </Text>
      {image && isLoading && (
        <Box width="100%">
          <Spinner label="loading" size="xl" my={5} />
        </Box>
      )}
      {src && (
        <Center>
          <Image
            src={src}
            height={isLoading ? 0 : 300}
            width={300}
            quality={25}
            alt="question-image"
            loading="eager"
            sizes="(max-width: 300px) 100vw, 300px"
            priority
            onError={() => setSrc(`/image-error-${colorMode}.svg`)}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </Center>
      )}
    </Stack>
  )
}
