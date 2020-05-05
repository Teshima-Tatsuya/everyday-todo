import React, { useReducer } from "react";
import "./App.css";
import { UserProvider } from "./contexts/user";
import { TodoProvider } from "./contexts/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import User from "./components/User";
import GoogleLogin from "./components/GoogleLogin";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
        <GoogleLogin />
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
