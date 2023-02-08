import { render } from "@testing-library/react"
import { store as globalStore, StoreModel } from "../store/store"
import { Store, StoreProvider } from "easy-peasy"
import React from "react"

const renderWithStore =
  (store: Store<StoreModel> = globalStore) =>
  (component: React.ReactNode) => {
    return render(<StoreProvider store={store}>{component}</StoreProvider>)
  }

export default renderWithStore
