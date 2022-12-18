import { action, Action, State } from "easy-peasy";

export interface SessionStoreModel {
  page: number;
  setPage: Action<SessionStoreModel, number>;
}

export const sessionStore: SessionStoreModel = {
  page: 0,
  setPage: action((state: State<SessionStoreModel>, payload) => {
    state.page = payload;
  }),
};
