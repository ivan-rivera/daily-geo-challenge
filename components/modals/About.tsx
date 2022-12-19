import { Text } from "@chakra-ui/react";
import GenericModal from "./GenericModal";

/**
 * Content that goes into the About modal
 * @constructor
 */
function ModalData() {
  return (
    <Text>
      This app was authored by a web development hobbyist for the sake of public
      entertainment and education. With that in mind, the app is free (and will
      always be free) and without ads. However, given that it&apos;s a hobby
      project, it&apos;s not perfect. If you find any bugs or have any
      suggestions, please feel free to either contact me or raise an issue on
      GitHub. You may also like to check out the Troubleshooting section.
    </Text>
  );
}

/**
 * "About" modal
 * @constructor
 */
export default function AboutModal() {
  return (
    <GenericModal title="About" toggle="about">
      <ModalData />
    </GenericModal>
  );
}
