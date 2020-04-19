import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "everyday-todo.firebaseapp.com",
  databaseURL: "https://everyday-todo.firebaseio.com",
  projectId: "everyday-todo",
  storageBucket: "everyday-todo.appspot.com",
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
