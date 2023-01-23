import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export function filterOutLowResponse([_key, values]: [
  string,
  Record<string, number>
]) {
  return (
    Object.values(values).reduce((sum, value) => sum + value, 0) >=
    publicRuntimeConfig.minResponsesForQuestionStats
  )
}

export function convertResponseToProp([key, values]: [
  string,
  Record<string, number>
]) {
  const total = Object.values(values).reduce((sum, value) => sum + value, 0)
  const fractionValues = Object.fromEntries(
    Object.entries(values).map(([letter, count]) => [letter, count / total])
  )
  return [key, fractionValues]
}

export function calculateDailyScore(stats: any) {
  // TODO: fix type
  return stats.correct / (stats.games * stats.questions)
}
