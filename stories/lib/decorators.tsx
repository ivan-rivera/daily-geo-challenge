import React from "react"
import { Store, StoreProvider } from "easy-peasy"
import Layout from "../../components/root/Layout"
import { store as globalStore, StoreModel } from "../../store/store"

const _baseDecorators = [withLayout]

/**
 * Storybook layout function
 * @param Story
 */
export function withLayout(Story: React.ComponentType): JSX.Element {
  return (
    <Layout>
      <Story />
    </Layout>
  )
}

/**
 * Store decorator for storybook components
 * @param store
 */
export const withStoreProvider =
  (store: Store<StoreModel> = globalStore) =>
  (Story: React.ComponentType) =>
    (
      <StoreProvider store={store}>
        <Story />
      </StoreProvider>
    )

/**
 * A helper function to return an array of decorators with a store
 * @param store
 */
export function baseDecorators(store: Store<StoreModel> = globalStore) {
  return _baseDecorators.concat([withStoreProvider(store)])
}

export const storeTemplate = (store: Store<StoreModel>) => {
  return { decorators: [withStoreProvider(store)] }
}

export const fullTemplate = (store: Store<StoreModel>) => {
  return { decorators: baseDecorators(store) }
}
