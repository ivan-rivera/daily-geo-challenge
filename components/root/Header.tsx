import Image from "next/image";
import React from "react";
import { Center, useColorMode } from "@chakra-ui/react";

/**
 * Header component
 * It is only designed to display the logo
 */
export default function Header() {
  const { colorMode } = useColorMode();
  const imageFile =
    colorMode === "light" ? "/logo-light.svg" : "/logo-dark.svg";
  return (
    <Center bg="primary" p={10} borderBottom="1px" borderBottomColor="tertiary">
      <Image src={imageFile} alt="logo" width="550" height="120" />
    </Center>
  );
}
