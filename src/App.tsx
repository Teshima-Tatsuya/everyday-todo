import React, { useReducer } from "react";
import "./App.css";
import { UserProvider } from "./contexts/user";
import TodoForm from "./components/TodoForm";
import User from "./components/User";
import GoogleLogin from "./components/GoogleLogin";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <TodoForm />
        <GoogleLogin />
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
