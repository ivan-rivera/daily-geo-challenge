import { Text } from "@chakra-ui/react"
import { usePage } from "../../hooks/session"
import Button from "./Button"

/**
 * Play button that appears on the Welcome card of the home page
 * @constructor
 */
export default function PlayButton() {
  const [_page, setPage] = usePage()
  return (
    <Button
      onClick={() => setPage(1)}
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
