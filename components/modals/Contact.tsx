import { Box, Text } from "@chakra-ui/react"
import Article from "content/modals/contact.mdx"
import GenericModal from "./GenericModal"
import Contact from "../forms/Contact"
import { useState } from "react"
import FeedbackService from "../../services/FeedbackService"
import AnalyticsService from "../../services/AnalyticsService"

/**
 * "Contact" modal
 * @constructor
 */
export default function ContactModal() {
  const clickHandler = async (message: string): Promise<void> => {
    AnalyticsService.logEvent("contact", { contact_type: "message" })
    await FeedbackService.sendMessage(message, "contact")
    setSubmitted(true)
  }
  const [submitted, setSubmitted] = useState(false)
  return (
    <GenericModal toggle="contact">
      <>
        <Article />
        <Box mt={5} />
        {submitted ? (
          <Text>Thank you for your message!</Text>
        ) : (
          <Contact title="What do you have in mind?" onClick={clickHandler} />
        )}
      </>
    </GenericModal>
  )
}
