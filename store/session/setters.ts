import { action, State } from "easy-peasy"
import SessionStoreModel from "./types"

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
