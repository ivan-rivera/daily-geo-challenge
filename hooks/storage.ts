import { useEffect } from "react"
import { QUIZ_ID } from "../lib/constants"
import { usePage } from "./session"

/**
 * Retrieve the quiz ID
 */
function getQuizId(): number {
  return parseInt(localStorage.getItem(QUIZ_ID) || "0")
}

/**
 * Set Quiz ID
 * @param id
 */
function setQuizId(id: number): void {
  localStorage.setItem(QUIZ_ID, id.toString())
}

/**
 * Reset progress if the quiz ID changes
 * @param latestQuizId
 */
export function useReset(latestQuizId: number) {
  const [_page, setPage] = usePage()
  useEffect(() => {
    if (getQuizId() !== latestQuizId) {
      console.log("resetting progress...")
      setQuizId(latestQuizId)
      setPage(0)
    }
  }, [latestQuizId, setPage])
}
