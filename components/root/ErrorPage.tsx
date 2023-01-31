import { Center, Text, useColorMode, VStack } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import Button from "../forms/Button"
import AnalyticsService from "../../services/AnalyticsService"

export interface ErrorPageProps {
  code: number
  message: string
}

/**
 * Custom Error page
 * @constructor
 */
export default function ErrorPage({ code, message }: ErrorPageProps) {
  AnalyticsService.logEvent("error", { error_type: `page_${code}` })
  const { colorMode } = useColorMode()
  return (
    <Center>
      <VStack spacing={10} py={10}>
        <Image
          src={`/error${code}-${colorMode}.svg`}
          alt="error-image"
          width="440"
          height="290"
        />
        <Text fontSize="2xl">{message}</Text>
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </VStack>
    </Center>
  )
}
