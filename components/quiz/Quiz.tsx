import { Box, Button, Text } from "@chakra-ui/react";
import { usePage } from "../../hooks/session";

export default function Quiz() {
  const [page, setPage] = usePage();
  return (
    <Box>
      <Text>Question number: {page}</Text>
      <Button onClick={() => setPage(0)}>Home</Button>
    </Box>
  );
}
