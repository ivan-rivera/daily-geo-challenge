import { useMemo } from "react";
import { createStore, Action, action, persist } from "easy-peasy";

interface StoreModel {
  count: number;
  increment: Action<StoreModel, number>;
}

export const store = createStore<StoreModel>({
  count: 0,
  increment: action((state, payload) => {
    state.count += payload;
  }),
});
