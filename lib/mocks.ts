import { createQuestions } from "../stories/lib/helpers"

const fillerChoices: Choices = {
  "Some selection": { correct: false, letter: "A" },
  "This could be true": { correct: false, letter: "B" },
  "Something else": { correct: false, letter: "C" },
  "This is it": { correct: true, letter: "D" },
}

const extraChoices: Choices = {
  "Some other option:": { correct: false, letter: "D" },
  "This may be true": { correct: false, letter: "E" },
  "Something else again": { correct: false, letter: "F" },
  "Running out of ideas": { correct: false, letter: "G" },
  "This cannot be true": { correct: false, letter: "H" },
  "One more": { correct: false, letter: "I" },
  "And another": { correct: false, letter: "J" },
  "Last one": { correct: false, letter: "K" },
}

const questionTemplate: QuestionData = {
  id: 1,
  link: "https://www.google.com",
  question: "What is the answer to this question?",
  choices: { ...fillerChoices },
  image: null,
}

export const questionCreator = createQuestions(questionTemplate)

export const standardQuestion: QuestionData = questionTemplate

export const questionWithLongData: QuestionData = {
  ...questionTemplate,
  question: `This is a very long question that may take up multiple lines and would really
  test the layout of the question card. Let us hope that it will not cause any headaches.
  What is the answer to this question?`,
  choices: {
    "Some selection": { correct: false, letter: "A" },
    "Some other selection": { correct: false, letter: "B" },
    "Something else": { correct: false, letter: "C" },
    "This is a very long choice that will most probably wrap to the next line":
      {
        correct: true,
        letter: "D",
      },
  },
}

export const questionWithNonASCIIChars: QuestionData = {
  ...questionTemplate,
  question: "What is the capital of São Tomé and Príncipe?",
  choices: { ...fillerChoices, "São Tomé": { correct: false, letter: "E" } },
}

export const questionWithImage: QuestionData = {
  ...questionTemplate,
  image:
    "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Cambodia.svg",
}

export const questionWithBadImage: QuestionData = {
  ...questionTemplate,
  image:
    "http://commons.wikimedia.org/wiki/Special:FilePath/Flag%20of%20Neverland.svg",
}

export const questionWithManyChoices: QuestionData = {
  ...questionTemplate,
  choices: { ...fillerChoices, ...extraChoices },
}
