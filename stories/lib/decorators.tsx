import React from "react"
import { createStore, Store, StoreProvider } from "easy-peasy"
import Layout from "../../components/root/Layout"
import {
  models as globalModels,
  store as globalStore,
  StoreModel,
} from "../../store/store"

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
 * Clone store and extend it with attributes
 * @param update - an object that maps to the global model
 * @param label - an optional name of the store
 */
export function cloneStore(
  update: Partial<StoreModel> = {},
  label: string = "MockStore"
): Store<StoreModel> {
  return createStore<StoreModel>(
    { ...globalModels, ...update },
    { name: label }
  )
}

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
