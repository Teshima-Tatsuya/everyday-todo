import firebase from "firebase";

const config = {
  apiKey: ""
};

const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
