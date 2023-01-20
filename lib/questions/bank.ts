import countryFlagData from "data/country-flags.json"
import countryLandData from "data/country-land-area.json"
import countryCapitalData from "data/country-capitals.json"
import cityElevationData from "data/city-elevation.json"
import cityFoundedData from "data/city-inception.json"
import cityPopulationData from "data/city-population.json"
import { QuestionBlueprint } from "../types"

/**
 * TODO: review this blurb
 * The question bank contains all the possible questions that can be asked.
 * Each time we generate a quiz, we randomly sample a set of questions from
 * this list.
 *
 * Each question has a unique ID, an answer selection method (min, max, random),
 * a link clarifying where users can learn more about this topic, the question
 * itself and the underlying data source. In addition to the aforementioned
 * properties, each question also has a revision number. This number is used to
 * indicate changes in the question or the underlying data. For example, if the
 * number is set to 1,then the question has been revised and updated once.
 *
 * The question data consist of key-value pairs. The "select" property determines
 * how we select the answer for a given list. For example, if we use a "random"
 * select strategy, then a value will be picked at random. It is appropriate to
 * use when we ask a question about one of the keys, e.g. "what is the capital
 * of France?". Note that we can embed a variable into the question using the
 * Jinja syntax "{{ key }}". Min and max strategies are appropriate when the
 * values are numeric, for example, "what is the most/least populous city of the
 * provided options"?
 *
 * Lastly, the link property contains a relevant Wikipedia URL where users can
 * learn more about the question. Note that since we are using Wikidata rather
 * than Wikipedia, there may be inconsistencies between the two, or we may not be
 * able to find an appropriate link at all. All the below questions are backed
 * up with links that, at the time of writing, were compatible with the Wikidata
 * results. However, this may change in the future, and we expect to update the
 * data once a year or so. When these days occur, it is important to manually
 * eyeball the results against the provided sources.
 */
const bank: QuestionBlueprint[] = [
  // TODO: add tests to check selection & image
  {
    id: 1,
    revision: 0,
    image: true,
    select: "random",
    data: countryFlagData,
    link: "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags",
    question: "What country does this flag belong to?",
  },
  {
    id: 2,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area",
    data: countryLandData,
    question: "Which of the following countries covers the largest land area?",
  },
  {
    id: 3,
    revision: 0,
    image: false,
    select: "random",
    link: "https://en.wikipedia.org/wiki/List_of_national_capitals",
    data: countryCapitalData,
    question: "{{ key }} is the capital of what country?",
  },
  {
    id: 4,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_cities_by_elevation",
    data: cityElevationData,
    question: "Which of the following cities has the lowest elevation level?",
  },
  {
    // TODO: remove this question
    id: 5,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_cities_by_elevation", // FIXME
    data: cityFoundedData,
    question: "Which of the following cities is the oldest?",
  },
  {
    // TODO: reconcile data with the link
    id: 6,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_largest_cities",
    data: cityPopulationData,
    question: "Which of the following cities has the largest population?",
  },
]

export default bank
