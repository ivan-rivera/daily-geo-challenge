import { render } from "@testing-library/react"
import { store as globalStore, StoreModel } from "../store/store"
import { Store, StoreProvider } from "easy-peasy"
import React from "react"

/**
 * A wrapper that renders a component with a store
 * @param store
 */
const renderWithStore =
  (store: Store<StoreModel> = globalStore) =>
  (component: React.ReactNode) => {
    return render(<StoreProvider store={store}>{component}</StoreProvider>)
  }

export default renderWithStore
