import _ from "lodash"

export const dummyFbConfig = {
  apiKey: "xxx",
  authDomain: "xxx.firebaseapp.com",
  databaseURL: "https://xxx-rtdb.europe-west1.firebasedatabase.app",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx",
  appId: "1:xxx:web:xxx",
  measurementId: "G-XXX",
}

export const getDuplicates = <T>(items: T[]): T[] =>
  _(items)
    .countBy()
    .pickBy((count) => count > 1)
    .keys()
    .value() as T[]
