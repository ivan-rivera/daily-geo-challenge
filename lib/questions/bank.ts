import countryFlagData from "data/country-flags.json"
import countryLandData from "data/country-land-area.json"
import countryCapitalData from "data/country-capitals.json"
import cityElevationData from "data/city-elevation.json"
import cityFoundedData from "data/city-inception.json"
import cityPopulationData from "data/city-population.json"
import countryGiniData from "data/country-gini.json"
import countryHdiData from "data/country-hdi.json"
import countryHeadOfGovtData from "data/country-head-of-govt.json"
import countryInceptionData from "data/country-inception.json"
import countryIncomeData from "data/country-income.json"
import countryLifeExpectancyData from "data/country-life-expectancy.json"
import countryLiteracyData from "data/country-literacy.json"
import countryPopulationData from "data/country-population.json"
import countryIncarcerationData from "data/manual-country-incarceration.json"

/**
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
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area",
    data: countryLandData,
    question: "Which of the following countries covers the smallest land area?",
  },
  {
    id: 4,
    revision: 0,
    image: false,
    select: "random",
    link: "https://en.wikipedia.org/wiki/List_of_national_capitals",
    data: countryCapitalData,
    question: "{{ key }} is the capital of what country?",
  },
  {
    id: 5,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_cities_by_elevation",
    data: cityElevationData,
    question: "Which of the following cities has the lowest elevation level?",
  },
  {
    id: 6,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_oldest_continuously_inhabited_cities",
    data: cityFoundedData,
    question: "Which of the following cities is the oldest?",
  },
  {
    id: 7,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_oldest_continuously_inhabited_cities",
    data: cityFoundedData,
    question: "Which of the following cities is the youngest?",
  },
  {
    id: 8,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_largest_cities",
    data: cityPopulationData,
    question: "Which of the following cities has the largest population?",
  },
  {
    id: 9,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_largest_cities",
    data: cityPopulationData,
    question: "Which of the following cities has the lowest population?",
  },
  {
    id: 10,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_Human_Development_Index",
    data: countryHdiData,
    question:
      "Which of the following countries has the highest Human Development Index?",
  },
  {
    id: 11,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population",
    data: countryPopulationData,
    question: "Which of the following countries has the highest population?",
  },
  {
    id: 12,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population",
    data: countryPopulationData,
    question: "Which of the following countries has the lowest population?",
  },
  {
    id: 13,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_sovereign_states_by_date_of_formation",
    data: countryInceptionData,
    question: "Which of the following countries is the oldest?",
  },
  {
    id: 14,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_sovereign_states_by_date_of_formation",
    data: countryInceptionData,
    question: "Which of the following countries is the youngest?",
  },
  {
    id: 15,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_income_equality",
    data: countryGiniData,
    question:
      "Which of the following countries has the most unequal income distribution?",
  },
  {
    id: 16,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_income_equality",
    data: countryGiniData,
    question:
      "Which of the following countries has the most equal income distribution?",
  },
  {
    id: 17,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/Median_income",
    data: countryIncomeData,
    question: "Which of the following countries has the lowest median income?",
  },
  {
    id: 18,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/Median_income",
    data: countryIncomeData,
    question: "Which of the following countries has the highest median income?",
  },
  {
    id: 19,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_literacy_rate",
    data: countryLiteracyData,
    question: "Which of the following countries has the highest literacy rate?",
  },
  {
    id: 20,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_literacy_rate",
    data: countryLiteracyData,
    question: "Which of the following countries has the lowest literacy rate?",
  },
  {
    id: 21,
    revision: 0,
    image: false,
    select: "min",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy",
    data: countryLifeExpectancyData,
    question:
      "Which of the following countries has the lowest life expectancy?",
  },
  {
    id: 22,
    revision: 0,
    image: false,
    select: "max",
    link: "https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy",
    data: countryLifeExpectancyData,
    question:
      "Which of the following countries has the highest life expectancy?",
  },
  {
    id: 23,
    revision: 0,
    image: false,
    select: "min",
    link: "https://worldpopulationreview.com/country-rankings/incarceration-rates-by-country",
    data: countryIncarcerationData,
    question:
      "Which of the following countries has the highest incarceration rate?",
  },
  {
    id: 24,
    revision: 0,
    image: false,
    select: "min",
    link: "https://worldpopulationreview.com/country-rankings/incarceration-rates-by-country",
    data: countryIncarcerationData,
    question:
      "Which of the following countries has the lowest incarceration rate?",
  },
  {
    id: 25,
    revision: 0,
    image: false,
    select: "random",
    link: "https://en.wikipedia.org/wiki/List_of_current_heads_of_state_and_government",
    data: countryHeadOfGovtData,
    question: "{{ key }} is the leader of what country?",
  },
]

export default bank
