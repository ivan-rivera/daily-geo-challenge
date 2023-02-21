## Contributing to this project

First, thank you for your interest in contributing to this project! We welcome all contributions, no matter how big or small. There are several reasons why developers may like to contribute to this project:

1. You want to learn more about web development (or any technologies used here), and you want to play with an existing project
2. You like the website, and you want to help improve it
3. You would like to repurpose this project for a different use case (e.g. a film quiz)

Regardless of your reasons, here are the ways in which you can contribute:

1. **Report a bug**: if you find a bug, then please create an issue for it
2. **Suggest a feature**: if you have an idea for a new feature, then please create an issue for it
3. **Address any of the existing issues**: if you see an issue that you think you can fix (perhaps one created by you), then please leave a comment on the issue saying that you are working on it and then create a PR. Please avoid creating a PR without first creating an issue for it
4. **Add more questions**: the website would greatly benefit from a greater pool of questions and if you can add a new question, that would be highly appreciated. Please see the below instructions on how to add more questions
5. **Add more tests**: this codebase could benefit from more tests, so if you can add more tests (whether unit or E2E), then please do so

## Running the app locally

Simply clone the repo and run `npm install --legacy-peer-deps`. Note that you will need Node 19.6 for this. Next, you may like to create a `.env.local` file and add the following:

```shell
NEXT_PUBLIC_DEV_FB_API_KEY=xxx
NEXT_PUBLIC_DEV_FB_AUTH_DOMAIN=xxx.firebaseapp.com
NEXT_PUBLIC_DEV_FB_DATABASE_URL=https://xxx-rtdb.europe-west1.firebasedatabase.app
NEXT_PUBLIC_DEV_FB_PROJECT_ID=xxx
NEXT_PUBLIC_DEV_FB_STORAGE_BUCKET=xxx.appspot.com
NEXT_PUBLIC_DEV_FB_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_DEV_FB_APP_ID=1:xxx:web:xxx
NEXT_PUBLIC_DEV_GA_MEASUREMENT_ID=G-XXX
NEXT_PUBLIC_PROD_FB_API_KEY=xxx
NEXT_PUBLIC_PROD_FB_AUTH_DOMAIN=xxx.firebaseapp.com
NEXT_PUBLIC_PROD_FB_DATABASE_URL=https://xxx-rtdb.europe-west1.firebasedatabase.app
NEXT_PUBLIC_PROD_FB_PROJECT_ID=xxx
NEXT_PUBLIC_PROD_FB_STORAGE_BUCKET=xxx.appspot.com
NEXT_PUBLIC_PROD_FB_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_PROD_FB_APP_ID=1:xxx:web:xxx
NEXT_PUBLIC_PROD_GA_MEASUREMENT_ID=G-XXX
```

Then you may also like to go into `settings.json` and set `backendEnabled=false`. Alternatively, you can create your own Firebase project and set the `DEV` environment to point at that project.

Now you should be able to run `npm run dev` and the app should be running on `localhost:3000`. You should also be able to access Storybook and run tests (see `package.json` for available commands).

## Adding more questions

If you would like to add more questions, then you may like to first familiarise yourself with the [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page) project. It is a sister project of Wikipedia, but it offers a user-friendly API that allows us to extract data from it. You can play around with the query builder [here](https://query.wikidata.org/). If you find new data that could be used in a question, then please go through the following steps:

1. Create an issue for this
2. Create a new file under `sparql/` directory where the first word will describe the level at which the data is reported (e.g. country or city) and the rest will describe what exactly itn is about, e.g. `country-population.rq`.
3. Paste your query from the query builder into this file. Make sure that your query runs in the query builder. Make sure that the results return `key` and `value` pairs where the key will be the entity at which your data is reported and the value will be used to resolve the answer. Also make that all keys and values are unique (you can remove duplicated values by sampling them out). Also make sure that you remove confusing cities and countries (e.g. there is "Netherlands" and "Kingdom Of The Netherlands", only one should be kept). 
4. Run `npm run generate-data`. This should create a file under `data/` with matching name to your SPARQL query but `json` suffix.
5. Add a question for the new data source under `lib/questions/bank.ts`.
6. At this point you may like to run tests locally `npm run test` and run the app locally with `npm run dev`
7. Create a PR for this
