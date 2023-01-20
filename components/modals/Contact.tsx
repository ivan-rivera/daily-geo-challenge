import { Text } from "@chakra-ui/react"
import GenericModal from "./GenericModal"
import Contact from "../forms/Contact"
import { useState } from "react"

/**
 * Content that goes into the Contact modal
 * @constructor
 */
function ModalData() {
  const clickHandler = () => {
    // TODO: handle contact submission
    setSubmitted(true)
    console.log("submit")
  }
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <Text my={5}>
        If you have any questions or suggestions, please feel free to get in
        touch with the developer via the below form.
      </Text>
      {submitted ? (
        <Text>Thank you for your message!</Text>
      ) : (
        <Contact title="What do you have in mind?" onClick={clickHandler} />
      )}
    </>
  )
}

/**
 * "Contact" modal
 * @constructor
 */
export default function ContactModal() {
  return (
    <GenericModal title="Contact" toggle="contact">
      <ModalData />
    </GenericModal>
  )
}
