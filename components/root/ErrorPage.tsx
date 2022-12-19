import { Button, Center, Text, useColorMode, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface ErrorPageProps {
  code: number;
  message: string;
}

/**
 * Custom Error page
 * @constructor
 */
export default function ErrorPage({ code, message }: ErrorPageProps) {
  const { colorMode } = useColorMode();
  return (
    <Center>
      <VStack spacing={10} pt={10}>
        <Image
          src={`/error${code}-${colorMode}.svg`}
          alt="error-image"
          width="440"
          height="290"
        />
        <Text fontSize="2xl">{message}</Text>
        <Link href="/">
          <Button
            bg="quarternary"
            color="primary"
            _hover={{ bg: "tertiary", color: "background" }}
          >
            Home
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
