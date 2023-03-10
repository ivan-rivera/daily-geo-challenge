import { Icon, Text } from "@chakra-ui/react"
import { TablerIcon } from "@tabler/icons"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

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
        key={text}
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
        <Icon
          as={icon}
          color="quarternary"
          boxSize={[8, 10, 14]}
          pr={2}
          ml={[0, 1, 5]}
        />
        <Text fontSize={["sm", "lg", "2xl"]} as="b" mr={[0, 1, 5]}>
          {text}
        </Text>
      </motion.div>
    </AnimatePresence>
  )
}
