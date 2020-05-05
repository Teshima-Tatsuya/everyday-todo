import React, { useReducer, useContext } from "react";
import "./App.css";
import { UserProvider, UserContext } from "./contexts/user";
import Main from "./components/Main";

const App: React.FC = (props) => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
};

export default App;
