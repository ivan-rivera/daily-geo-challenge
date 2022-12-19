import { Text } from "@chakra-ui/react";
import GenericModal from "./GenericModal";

/**
 * Content that goes into the How It Works modal
 * TODO: add reference to the database
 * @constructor
 */
function ModalData() {
  return (
    <Text>
      A set of questions get sampled from a database of world facts. This
      database was created by the same author who built this app, specifically
      for the purpose of this project. The questions get refreshed every 24
      hours. Every one sees the same questions in the same order. Once enough
      people submit their answers, performance statistics are calculated and
      displayed. These statistics are gathered for each question (so that you do
      not need to complete the whole quiz to contribute to the stats) and for
      the entire quiz. Once you complete the quiz, you can share your results
      with your friends ahd challenge them to beat your score.
    </Text>
  );
}

/**
 * "How It Works" modal
 * @constructor
 */
export default function HowItWorksModal() {
  return (
    <GenericModal title="How It Works" toggle="howItWorks">
      <ModalData />
    </GenericModal>
  );
}
