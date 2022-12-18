import { Text } from "@chakra-ui/react";
import GenericModal from "./GenericModal";

/**
 * TODO: implement contact form
 * Content that goes into the Contact modal
 * @constructor
 */
function ModalData() {
  return (
    <Text>
      If you have any questions or suggestions, please feel free to get in touch
      with the developer via the below form.
    </Text>
  );
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
  );
}
