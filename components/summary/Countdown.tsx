import { default as ReactCountdown, zeroPad } from "react-countdown"
import { Text } from "@chakra-ui/react"
import { useStoreState } from "../../store/store"
import getConfig from "next/config"
import React from "react"

const { publicRuntimeConfig } = getConfig()

interface CountdownProps {
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

const countRenderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownProps) => {
  if (completed) return <Text>Updating questions...</Text>
  const time = `${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`
  return (
    <Text color="quarternary" mb={5}>
      Next challenge comes out in <strong>{time}</strong>
    </Text>
  )
}

export default function Countdown() {
  const timeUntilRefresh = useStoreState((state) => {
    const refreshedTime = new Date(state.session.refreshTime).getTime()
    return refreshedTime + publicRuntimeConfig.revalidationIncrement * 1000
  })
  return <ReactCountdown date={timeUntilRefresh} renderer={countRenderer} />
}
