/**
 * Data generation script
 *
 * This script uses queries defined in `sparql/` directory to generate data
 * that appears in the `data/` directory
 *
 * See README for more information
 */

const path = require("path")
const fs = require("fs")

const ENDPOINT = "https://query.wikidata.org/sparql"
const HEADERS = { Accept: "application/sparql-results+json" }
const PARENT_DIR = path.resolve(__dirname, "..")

/**
 * Save data as JSON to the data store
 * @param data
 * @param fileName
 */
const saveData = (data: Object, fileName: string) => {
  const filePath = `${PARENT_DIR}/data/${fileName}.json`
  const contents = JSON.stringify(data, null, 4)
  fs.writeFile(filePath, contents, (err: Error) => err && console.log(err))
}

/**
 * Build URL based on the query
 * @param query
 */
const buildUrl = (query: string) =>
  `${ENDPOINT}?query=${encodeURIComponent(query)}`

/**
 * Parse the data returned from the WDQS endpoint into a more suitable format
 * @param data
 */
const parseWDQS = (data: { [key: string]: { value: string } }[]) => {
  return data.reduce((acc: Object, current) => {
    const key = current["key"]["value"]
    const value = current["value"]["value"]
    const valueIsNumber = !isNaN(Number(value))
    return { ...acc, [key]: valueIsNumber ? Number(value) : value }
  }, {})
}

/**
 * Call the WDQS endpoint and return the data
 * @param query an RQ query as a string
 */
const callApi = (query: string) => {
  return fetch(buildUrl(query), { headers: HEADERS })
    .then((res) => res.json())
    .then((res) => res.results.bindings)
    .then(parseWDQS)
}

// Iterate over each query in the sparql directory and save the results to data/
fs.readdir(`${PARENT_DIR}/sparql/`, (err: Object, files: string[]) => {
  if (err) console.log("error occurred: ", err)
  files.forEach((queryFile: string) => {
    console.log(`Processing ${queryFile}...`)
    const fileName = queryFile.split(".")[0]
    const query = fs.readFileSync(`${PARENT_DIR}/sparql/${queryFile}`, "utf8")
    callApi(query).then((data) => saveData(data, fileName))
  })
})

export {}
