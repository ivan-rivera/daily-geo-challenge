import { createStore, createTypedHooks, persist } from "easy-peasy"
import { modalsStore, ModalsStoreModel } from "./modals"
import { sessionStore } from "./session"
import SessionStoreModel from "./session/types"

export interface StoreModel {
  modals: ModalsStoreModel
  session: SessionStoreModel
}

export const models = {
  modals: modalsStore,
  session: persist(sessionStore, { storage: "localStorage" }),
}

export const store = createStore<StoreModel>(models, { name: "GlobalStore" })
export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>()
