import _ from "lodash"

export const getDuplicates = <T>(items: T[]): T[] =>
  _(items)
    .countBy()
    .pickBy((count) => count > 1)
    .keys()
    .value() as T[]
