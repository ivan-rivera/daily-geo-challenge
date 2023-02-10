import React from "react"
import Button from "./Button"
import { Text } from "@chakra-ui/react"
import { store } from "../../store/store"
import AnalyticsService from "../../services/AnalyticsService"

/**
 * Play button that appears on the Welcome card of the home page
 * @constructor
 */
export default function PlayButton() {
  return (
    <Button
      onClick={() => {
        AnalyticsService.logEvent("goal_completion", { goal_name: "start" })
        AnalyticsService.setUserProperties({ player: "starter" })
        store.dispatch.session.setPage(1)
      }}
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
