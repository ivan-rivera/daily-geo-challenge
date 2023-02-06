import { ComponentMeta } from "@storybook/react"
import { fullTemplate } from "../lib/decorators"
import {
  inProgressCorrect,
  inProgressCorrectLongData,
  inProgressCorrectVoted,
  inProgressCorrectWithStats,
  inProgressIncorrect,
  inProgressUnanswered,
  inProgressUnansweredBadImage,
  inProgressUnansweredImage,
  inProgressUnansweredLongData,
  inProgressUnansweredManyChoices,
  inProgressUnansweredNonASCII,
} from "../../lib/mocks/states"
import Game from "../../components/game/Game"

// TODO:
//  - Reconcile these with tests?
export default {
  title: "Pages/Question Page",
  component: Game,
} as ComponentMeta<typeof Game>

export const Unanswered = fullTemplate(inProgressUnanswered)
export const UnansweredNonASCII = fullTemplate(inProgressUnansweredNonASCII)
export const WithManyChoices = fullTemplate(inProgressUnansweredManyChoices)
export const WithImage = fullTemplate(inProgressUnansweredImage)
export const WithBadImage = fullTemplate(inProgressUnansweredBadImage)
export const WithLongData = fullTemplate(inProgressUnansweredLongData)
export const Incorrect = fullTemplate(inProgressIncorrect)
export const Correct = fullTemplate(inProgressCorrect)
export const CorrectVoted = fullTemplate(inProgressCorrectVoted)
export const CorrectLongData = fullTemplate(inProgressCorrectLongData)
export const QuestionCorrectWithStats = fullTemplate(inProgressCorrectWithStats)
