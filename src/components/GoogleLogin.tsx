import * as React from "react";
import firebase from "../plugins/firebase";
import "firebase/auth";

const GoogleLogin: React.FC = (props) => {
  const login: any = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <>
      <button onClick={login}>Googleでログイン</button>
      {firebase.auth().onAuthStateChanged((user) => user?.displayName)}
    </>
  );
};

export default GoogleLogin;
