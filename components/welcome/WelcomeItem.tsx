import { Icon, Text } from "@chakra-ui/react"
import { TablerIcon } from "@tabler/icons"
import { motion, AnimatePresence } from "framer-motion"

export interface WelcomeItemProps {
  icon: TablerIcon
  text: string
  delay: number
}

/**
 * Single Welcome item line
 * @param icon
 * @param text
 * @param delay
 * @constructor
 */
export default function WelcomeItem({ icon, text, delay }: WelcomeItemProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Icon as={icon} color="quarternary" boxSize={[8, 14]} pr={2} />
        <Text fontSize={["sm", "lg", "2xl"]} as="b">
          {text}
        </Text>
      </motion.div>
    </AnimatePresence>
  )
}
