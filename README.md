# Daily Geo Challenge

<div style="text-align: center; width: 100%"><img src="https://i.imgur.com/K4yGKVT.png" alt="logo"></div>

## Table of Contents

#### 1. ([About](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#about))
#### 2. ([Contributing](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#contributing))
#### 3. ([Technologies Used](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#technologies-used))
#### 4. ([Initial Steps](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#steps-to-contribute-to-the-project))
#### 5. ([How To Install Node.js](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#how-to-install-nodejs))

## About

This is the source code for the [Daily Geo Challenge](www.daily-geo.com) website. The website is a quiz game that tests your knowledge of geography. Most of the questions are based on data extracted from Wikidata. However, the answers are not hardcoded, but are derived from the underlying data, which means that there is virtually an endless supply of questions. The questions are designed to be regenerated once per day (7 PM UTC) with everyone seeing the same set of questions and possible answers.

## Contributing

Web enthusiasts are welcome to contribute to this project, if you are interested, then please see our contribution guidelines under [CONTRIBUTING.md.](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/CONTRIBUTING.md) You are also welcome to fork and repurpose this project, however you wish. For example, if you would like to center it around films (or any other topic), as opposed to geography. To do this, refer to the steps below, as well as the contribution guidelines under [CONTRIBUTING.md.](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/CONTRIBUTING.md) 

## Technologies Used

- This project is written in **TypeScript**
- The frontend was designed with **Figma**
- The frontend is built with **Next.js** and **React**
- The frontend is styled with **Chakra-UI**
- The backend is built with **Firebase**
- The website is hosted on **Vercel**
- The code is tested with **Storybook** and **Jest**
- The code is linted with **ESLint**, **Prettier** and **Husky**
- We use **Easy-Peasy** for state management
- Daily update is triggered with a cron job via **easycron.com**

## Initial Steps
1. Before we begin, note that you will need Node v19.6 (or higher) for this project. If you are not sure what version of Node.js you currently have, open up the terminal on your computer, and type the command `node - v`, and press `Enter`.
2. This will output the version number of Node.js that is installed on your computer onto the terminal screen.
3. If the version listed is not 19.6 (or higher), please install the latest version of Node.js, using the steps [here](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/README.md#how-to-install-nodejs).
4. After you have ensured that your version is up-to-date, clone the repository to your computer. To do this, navigate to the main page of this repository on GitHub, and above the list of files, click `Code`.
5. Then, copy the URL for the repository, using whichever method you prefer. 
6. Open up the terminal on your computer, and change the current working directory to the location where you want the cloned directory. For example, `cd Desktop`.
7. Next, type `git clone`, and then paste the previously copied URL into the terminal. Then, press `Enter`.
8. Now, you have cloned the repository onto your local computer.
9. For a more detailed description of this process, visit this [page](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) on GitHub.
10. Once you have cloned the repository, open up a new terminal window.
11. Then, navigate to the appropriate directory. This directory should be the project root folder, or the folder above your node_modules folder.
12. Next, type `npm install --legacy-peer-deps`, and press `Enter`.
13. From here, you should be able to type "npm run dev", and get started with contributing to the project.
14. Ensure that the app is running on `localhost:3000`. A separate window should open up, with `localhost:3000` listed at the top.
15. As you make changes to the code, save your contributions, and check to see if the updates appear on `localhost:3000`.
16. From here, you are free to make whatever changes you wish. If you get stuck, refer back to this document, or to the [CONTRIBUTING.md](https://github.com/ivan-rivera/daily-geo-challenge/blob/main/CONTRIBUTING.md) file in the original repository, for guidelines and support.
17. Happy contributing!

## How To Install Node.js

1. Open a new browser window, and head over to the [Node.js](https://nodejs.org/en/download) website.
2. Install the the file appropriate for your system, and follow the steps outlined on the page.
3. Head back to Step 1 above, and continue setting up the project for contribution.
