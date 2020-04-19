import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "everyday-todo.firebaseapp.com",
  databaseURL: "https://everyday-todo.firebaseio.com",
  projectId: "everyday-todo",
  storageBucket: "everyday-todo.appspot.com",
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
