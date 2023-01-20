import Button from "./Button"
import { Text } from "@chakra-ui/react"
import { store } from "../../store/store"

/**
 * Play button that appears on the Welcome card of the home page
 * @constructor
 */
export default function PlayButton() {
  return (
    <Button
      onClick={() => store.dispatch.session.setPage(1)}
      size="xl"
      width={["75px", "110px", "150px"]}
      height={["45", "60px", "70px"]}
      boxShadow="lg"
    >
      <Text fontSize={["base", "xl"]} as="b">
        Let&apos;s Play!
      </Text>
    </Button>
  )
}
