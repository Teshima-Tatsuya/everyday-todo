import React, { useContext } from "react";
import { UserProvider, UserContext } from "../contexts/user";
import { TodoProvider } from "../contexts/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import User from "./User";
import GoogleLogin from "./GoogleLogin";

const Main: React.FC = (props) => {
  const { isLoading, user } = useContext(UserContext);

  return (
    <div className="App">
      {isLoading ? (
        <GoogleLogin />
      ) : (
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      )}
      <User />
    </div>
  );
};

export default Main;
