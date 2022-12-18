import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import ModalLinks from "./ModalLinks";
import BottomRow from "./BottomRow";

/**
 * Footer component
 * This component consists of 2 rows, where the first displays modals
 * such as "about" and "contact" and the second displays a link to
 * the GitHub page of the project, the version and the theme switcher
 */
export default function Footer() {
  return (
    <Box
      bg="primary"
      pb={15}
      pt={1}
      px={1}
      borderTop="1px"
      borderTopColor="tertiary"
    >
      <Center>
        <SimpleGrid columns={1} spacing={5}>
          <ModalLinks />
          <BottomRow />
        </SimpleGrid>
      </Center>
    </Box>
  );
}
