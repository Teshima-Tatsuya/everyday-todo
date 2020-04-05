import firebase from "firebase";

var admin = require("firebase-admin");

var serviceAccount = require("../secret/serviceAccountKey.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://everyday-todo.firebaseio.com"
});

export const firestore = firebaseApp.firestore();
