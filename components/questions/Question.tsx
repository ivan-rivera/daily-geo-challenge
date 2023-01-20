import { Divider } from "@chakra-ui/react"
import QuestionPrompt from "./QuestionPrompt"
import AnswerChoices from "./AnswerChoices"
import QuestionNav from "./QuestionNav"
import BrandCard from "../display/BrandCard"
import { useStoreState } from "../../store/store"
import QuestionHeader from "./QuestionHeader"
import QuestionFeedback from "./QuestionFeedback"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

/**
 * Question wrapper that contains the question, an optional image, answers
 * and the controls
 * @constructor
 */
export default function Question() {
  const question = useStoreState((state) => state.session.pageQuestion)
  const page = useStoreState((state) => state.session.page)
  const controls = useAnimation()
  useEffect(() => {
    controls.set({ opacity: 0 })
    controls.start({ opacity: 1 })
  }, [page, controls])
  return (
    <AnimatePresence>
      <QuestionFeedback />
      <motion.div
        transition={{ duration: 0.3, delay: 0.1 }}
        animate={controls}
        key={page}
      >
        <BrandCard mt={5} mb={10} bg="secondary">
          <QuestionHeader />
          <QuestionPrompt question={question.question} image={question.image} />
          <AnswerChoices choices={question.choices} />
          <Divider mt={5} color="quarternary" />
          <QuestionNav infoUrl={question.link} />
        </BrandCard>
      </motion.div>
    </AnimatePresence>
  )
}
