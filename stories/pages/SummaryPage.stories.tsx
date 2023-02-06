import { ComponentMeta } from "@storybook/react"
import { fullTemplate } from "../lib/decorators"
import {
  completedSummary,
  completedSummarySuggested,
  completedSummaryVoted,
  completedSummaryWithScore,
} from "../../lib/mocks/states"
import Game from "../../components/game/Game"

export default {
  title: "Pages/Summary Page",
  component: Game,
} as ComponentMeta<typeof Game>

export const WithoutGlobalScore = fullTemplate(completedSummary)
export const WithGlobalScore = fullTemplate(completedSummaryWithScore)
export const Voted = fullTemplate(completedSummaryVoted)
export const SubmittedFeedback = fullTemplate(completedSummarySuggested)
