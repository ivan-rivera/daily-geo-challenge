import Button from "../forms/Button"
import { useState } from "react"
import { Alert, AlertTitle, AlertIcon } from "@chakra-ui/alert"
import { useStoreState } from "../../store/store"
import { Center } from "@chakra-ui/react"
import AnalyticsService from "../../services/AnalyticsService"

interface ShareHandlerProps {
  text: string
  popupTrigger: () => void
}

/**
 * Handle the "share" click. If the browser supports the Web Share API, then
 * this button opens up the sharing menu, otherwise it copies the text to
 * clipboard
 * @param text
 * @param popupTrigger
 */
const shareHandler = async ({ text, popupTrigger }: ShareHandlerProps) => {
  if (typeof navigator !== "undefined" && navigator?.share !== undefined) {
    AnalyticsService.logEvent("share", { format: "native" })
    await navigator
      .share({ title: "Share", text })
      .catch((err) => console.log(err))
  } else {
    try {
      navigator.clipboard.writeText(text).then(() => popupTrigger())
      AnalyticsService.logEvent("share", { format: "copy" })
    } catch (err) {
      alert("Your browser does not support this action")
    }
  }
}

function Popup() {
  return (
    <Center>
      <Alert
        status="success"
        variant="subtle"
        borderRadius="md"
        my={2}
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        maxW="md"
      >
        <AlertIcon boxSize="20px" mr={2} />
        <AlertTitle>Copied to clipboard!</AlertTitle>
      </Alert>
    </Center>
  )
}

export default function Share() {
  const text = useStoreState((state) => state.session.shareScore)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const popupTrigger = () => {
    setIsPopupOpen(true)
    setTimeout(() => setIsPopupOpen(false), 2000)
  }
  return (
    <>
      <Button
        mx="auto"
        my={5}
        onClick={() => shareHandler({ text, popupTrigger })}
      >
        Share
      </Button>
      {isPopupOpen && <Popup />}
    </>
  )
}
