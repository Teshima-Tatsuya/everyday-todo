import * as React from "react";
import firebase from "../plugins/firebase";
import "firebase/auth";
import { Button } from "@material-ui/core";

const GoogleLogin: React.FC = (props) => {
  const login: any = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={login}>
        Googleでログイン
      </Button>
    </>
  );
};

export default GoogleLogin;
