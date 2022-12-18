import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { IconBrandGithub, IconMoon, IconSun } from "@tabler/icons";
import Link from "next/link";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const iconSize = 6;

/**
 * Bottom row of the footer.
 * This component contains the link to the project on GitHub,
 * the version of the app and the theme switcher
 * @constructor
 * TODO: update the GitHub link
 */
export default function BottomRow() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent="space-between" color="tertiary">
      <Link href="https://github.com/ivan-rivera">
        <Icon as={IconBrandGithub} boxSize={iconSize} />
      </Link>
      <Text>version {publicRuntimeConfig.version}</Text>
      <Icon
        as={colorMode === "light" ? IconMoon : IconSun}
        boxSize={iconSize}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
