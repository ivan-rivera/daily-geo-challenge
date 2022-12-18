import { Text } from "@chakra-ui/react";
import GenericModal from "./GenericModal";

/**
 * Content that goes into the Troubleshooting modal
 * TODO: add link to GitHub
 * @constructor
 */
function ModalData() {
  return (
    <Text>
      If you are having trouble with the app, then the first thing you might
      like to do is reset your browser cache. If this does not work, then please
      submit a GitGub issue. It would be helpful if you could take a screenshot
      of the problem and include it in the issue.
    </Text>
  );
}

/**
 * "Troubleshooting" modal
 * @constructor
 */
export default function TroubleshootingModal() {
  return (
    <GenericModal title="Troubleshooting" toggle="troubleshooting">
      <ModalData />
    </GenericModal>
  );
}
