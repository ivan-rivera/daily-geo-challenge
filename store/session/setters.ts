import { action, State, thunk, thunkOn } from "easy-peasy"
import SessionStoreModel from "./types"
import StatsService from "../../services/StatsService"
import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export function setToPayload<T extends keyof State<SessionStoreModel>>(
  key: T,
  isGlobal: boolean = true,
  fn: (x: any) => any = (x) => x
) {
  return action((state: State<SessionStoreModel>, payload) => {
    isGlobal
      ? (state[key] = fn(payload))
      : ((state[key] as Record<number, typeof payload>)[state.page] =
          fn(payload))
  })
}

export const setDailyScore = setToPayload(
  "dailyScore",
  true,
  (x) => Math.floor(x * 100).toString() + "%"
)

export const resetSession = (initialState: {}) =>
  action((state: State<SessionStoreModel>) => {
    Object.assign(state, initialState)
  })

export const onSetFinalScoreSubmitted = thunkOn<SessionStoreModel, void>(
  (actions) => actions.setFinalScoreSubmitted,
  async (_actions, _target) => {
    await StatsService.submitFinalScore()
  }
)

export const setServerProps = thunk<SessionStoreModel>(
  async (actions, _payload) => {
    const globalStats = await StatsService.getDailyStats()
    const statsPerQuestion = await StatsService.getStatsPerQuestion()
    if (globalStats.games >= publicRuntimeConfig.minResponsesForGlobalStats)
      actions.setDailyScore(calculateDailyScore(globalStats))
    actions.setQuestionsStats(statsPerQuestion)
  }
)

function calculateDailyScore(stats: DailyStats) {
  return stats.correct / (stats.games * stats.questions)
}
