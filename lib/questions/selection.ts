/**
 * This file is concerned with answer selection strategy
 */
import { sample } from "lodash"

/**
 * General resolver function that applies a reducer to select a single
 * item from the list and mark it as true
 * @param reducer
 */
const resolver =
  (reducer: Reducer<string | number>) =>
  (data: Datapoints): [string | number, Choices] => {
    const target = reducer(Object.values(data))
    const markedKeys = Object.keys(data).reduce((acc, key, index) => {
      const letter = String.fromCharCode(65 + index)
      return { ...acc, [key]: { correct: data[key] === target, letter } }
    }, {} as Choices)
    return [target, markedKeys]
  }

/**
 * Math operation
 * @param op
 */
const mathOp =
  (op: (...values: number[]) => number) => (data: (string | number)[]) =>
    op(...(data as number[]))

export const selectionResolvers: SelectionStrategyResolvers = {
  min: resolver(mathOp(Math.min)),
  max: resolver(mathOp(Math.max)),
  random: resolver(sample),
}
