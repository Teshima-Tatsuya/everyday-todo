import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo";

const TodoList: React.FC = (props) => {
  const todos = useContext(TodoContext);
  return (
    <>
      <ul>
        <input type="text" />
      </ul>
    </>
  );
};

export default TodoList;
