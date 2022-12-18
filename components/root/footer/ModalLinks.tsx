import { Actions } from "easy-peasy";
import { StoreModel, useStoreActions } from "../../../store/store";
import ModalLink from "./ModalLink";
import { Stack } from "@chakra-ui/react";

const modalLinks = {
  About: (actions: Actions<StoreModel>) => actions.modals.about.onOpen,
  Contact: (actions: Actions<StoreModel>) => actions.modals.contact.onOpen,
  Troubleshooting: (actions: Actions<StoreModel>) =>
    actions.modals.troubleshooting.onOpen,
  "How It Works": (actions: Actions<StoreModel>) =>
    actions.modals.howItWorks.onOpen,
};

/**
 * Collection of modal links that are meant to be accessed from the footer
 * These links open modals such as "about", "contact", etc
 * @constructor
 */
export default function ModalLinks() {
  return (
    <Stack direction="row" spacing="30px" color="quarternary">
      {Object.keys(modalLinks).map((key) => {
        const toggleFn = modalLinks[key as keyof typeof modalLinks];
        const toggleAction: () => void = useStoreActions(toggleFn);
        return <ModalLink key={key} text={key} onClick={toggleAction} />;
      })}
    </Stack>
  );
}
