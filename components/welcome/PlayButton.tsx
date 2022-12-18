import { Button, Text } from "@chakra-ui/react";
import { usePage } from "../../hooks/session";

/**
 * Play button that appears on the Welcome card of the home page
 * @constructor
 */
export default function PlayButton() {
  const [_page, setPage] = usePage();
  return (
    <Button
      onClick={() => setPage(1)}
      size="xl"
      width={["110px", "150px"]}
      height={["60px", "70px"]}
      color="secondary"
      bg="quarternary"
      boxShadow="lg"
      _hover={{
        bg: "tertiary",
        color: "primary",
      }}
    >
      <Text fontSize="xl" as="b">
        Let's Play!
      </Text>
    </Button>
  );
}
