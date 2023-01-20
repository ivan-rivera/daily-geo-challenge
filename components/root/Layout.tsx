import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./footer/Footer"
import Modals from "../modals/Modals"

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Layout component
 * It is designed to wrap the entire app which consists of header, footer
 * and the inner content
 * @param children
 * @constructor
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Flex flexDirection="column" minH="100vh" minW="320px">
        <Header />
        <Box flexGrow="1" bg="background">
          {children}
        </Box>
        <Footer />
      </Flex>
      <Modals />
    </>
  )
}
