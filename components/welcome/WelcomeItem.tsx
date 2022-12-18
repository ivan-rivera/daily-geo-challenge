import { Flex, Icon, Text } from "@chakra-ui/react";
import { TablerIcon } from "@tabler/icons";

export interface WelcomeItemProps {
  icon: TablerIcon;
  text: string;
}

/**
 * Single Welcome item line
 * @param icon
 * @param text
 * @constructor
 */
export default function WelcomeItem({ icon, text }: WelcomeItemProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Icon as={icon} color="quarternary" boxSize={[8, 14]} pr={2} />
      <Text fontSize={["base", "2xl"]} as="b">
        {text}
      </Text>
    </Flex>
  );
}
