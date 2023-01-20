import { IconChecks, IconGlobe, IconShare } from "@tabler/icons"
import WelcomeItem, { WelcomeItemProps } from "./WelcomeItem"
import getConfig from "next/config"
import { CardBody, VStack } from "@chakra-ui/react"

const { publicRuntimeConfig } = getConfig()

const welcomeItems: WelcomeItemProps[] = [
  { icon: IconGlobe, text: "Test your knowledge of geography", delay: 0.25 },
  { icon: IconShare, text: "Challenge your friends", delay: 0.5 },
  {
    icon: IconChecks,
    text: `${publicRuntimeConfig.questions} daily questions`,
    delay: 0.75,
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
      borderTopLeftRadius={15}
      borderTopRightRadius={15}
    >
      <VStack align="self-start">
        {welcomeItems.map((item) => (
          <WelcomeItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            delay={item.delay}
          />
        ))}
      </VStack>
    </CardBody>
  )
}
