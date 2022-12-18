import { Center, Text, Link } from "@chakra-ui/react";

interface ModalLinkProps {
  text: string;
  onClick: () => void;
}

/**
 * Modal Link holder used to display clickable options in the footer
 * that will open up relevant modals
 * @param text - label of the footer item
 * @param onClick - function to be called when the footer item is clicked
 * @constructor
 */
export default function ModalLink({ text, onClick }: ModalLinkProps) {
  return (
    <Center>
      <Link onClick={onClick}>
        <Text fontSize="md" as="b">
          {text}
        </Text>
      </Link>
    </Center>
  );
}
