import { createStore, createTypedHooks, persist } from "easy-peasy"
import { modalsStore, ModalsStoreModel } from "./modals"
import { sessionStore, SessionStoreModel } from "./session"

export interface StoreModel {
  modals: ModalsStoreModel
  session: SessionStoreModel
}

export const store = createStore<StoreModel>(
  {
    modals: modalsStore,
    session: persist(sessionStore, { storage: "localStorage" }),
  },
  {
    name: "GlobalStore",
  }
)

export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>()
