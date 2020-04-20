import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

import GoogleLogin from "./components/GoogleLogin";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <GoogleLogin />
    </div>
  );
}

export default App;
