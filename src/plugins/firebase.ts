import firebase from "firebase";

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
