import { Dispatch } from "react"
import { useStoreActions, useStoreState } from "../store/store"

/**
 * A hook that returns the current position in the game and a function to update it.
 */
export function usePage(): readonly [number, Dispatch<number>] {
  const page = useStoreState((state) => state.session.page)
  const setPage: (n: number) => void = useStoreActions(
    (actions) => actions.session.setPage
  )
  return [page, setPage]
}
