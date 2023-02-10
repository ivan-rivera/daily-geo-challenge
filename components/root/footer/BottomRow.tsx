import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react"
import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons"
import Link from "next/link"
import getConfig from "next/config"
import AnalyticsService from "../../../services/AnalyticsService"
import React from "react"

const { publicRuntimeConfig } = getConfig()
const iconSize = 6

/**
 * Bottom row of the footer.
 * This component contains the link to the project on GitHub,
 * the version of the app and the theme switcher
 * @constructor
 */
export default function BottomRow() {
  const { colorMode, toggleColorMode } = useColorMode()
  const modeSwitcher = (): void => {
    toggleColorMode()
    AnalyticsService.logEvent("theme_selected", { mode: colorMode })
  }
  return (
    <Flex justifyContent="space-between" color="tertiary">
      <Link href="https://github.com/ivan-rivera/daily-geo-challenge">
        <Icon as={IconBrandGithub} boxSize={iconSize} />
      </Link>
      <Text>version {publicRuntimeConfig.version}</Text>
      <Icon
        as={colorMode === "light" ? IconMoon : IconSun}
        boxSize={iconSize}
        onClick={modeSwitcher}
      />
    </Flex>
  )
}
