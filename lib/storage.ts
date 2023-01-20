import { QUIZ_ID } from "./constants"

/**
 * Retrieve the game ID
 */
export function getQuizId(): number {
  return parseInt(localStorage.getItem(QUIZ_ID) || "0")
}

/**
 * Set Quiz ID
 * @param id
 */
export function setQuizId(id: number): void {
  localStorage.setItem(QUIZ_ID, id.toString())
}
