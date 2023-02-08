import StatsService from "../../services/StatsService"
import getConfig from "next/config"
import * as fbDatabase from "@firebase/database"
const { publicRuntimeConfig } = getConfig()

describe("StatsService tests", () => {
  it("retrieve stats per question in the correct format", async () => {
    publicRuntimeConfig.backendEnabled = true
    const dummyData = {
      1: { A: 10, B: 10, C: 10, D: 70 },
      2: { C: 3, D: 5 },
      3: { B: 10, C: 10, D: 20 },
      4: { A: 10, B: 10 },
      5: { A: 1, C: 5 },
    }
    const expectedData = {
      1: { A: 0.1, B: 0.1, C: 0.1, D: 0.7 },
      3: { B: 0.25, C: 0.25, D: 0.5 },
      4: { A: 0.5, B: 0.5 },
    }
    jest
      .spyOn(fbDatabase, "get")
      //@ts-ignore
      .mockReturnValue(Promise.resolve({ val: () => dummyData }))
    const dailyStats = await StatsService.getStatsPerQuestion()
    expect(dailyStats).toEqual(expectedData)
    publicRuntimeConfig.backendEnabled = false
  })
})
export {}
