import * as firebase from 'firebase';

import config from "../secrets/firebase-config.json"


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};