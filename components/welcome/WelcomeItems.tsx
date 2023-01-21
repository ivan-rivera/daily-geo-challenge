import { IconChecks, IconGlobe, IconShare } from "@tabler/icons"
import WelcomeItem from "./WelcomeItem"
import getConfig from "next/config"
import { CardBody, VStack } from "@chakra-ui/react"
import { BOX_BORDER_RADIUS } from "../../lib/constants"

const { publicRuntimeConfig } = getConfig()

const welcomeItems = [
  {
    icon: IconGlobe,
    text: "Test your knowledge of geography",
  },
  {
    icon: IconShare,
    text: "Challenge your friends",
  },
  {
    icon: IconChecks,
    text: `${publicRuntimeConfig.questions} daily questions`,
  },
]

/**
 * Welcome screen items: text and icons
 * @constructor
 */
export default function WelcomeItems() {
  return (
    <CardBody
      bg="secondary"
      color="tertiary"
      borderBottom="1px"
      borderColor="tertiary"
      borderTopRadius={BOX_BORDER_RADIUS}
    >
      <VStack align="self-start">
        {welcomeItems.map((item, index) => (
          <WelcomeItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            delay={(index + 1) * 0.25}
          />
        ))}
      </VStack>
    </CardBody>
  )
}
