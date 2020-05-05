import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo";

const TodoList: React.FC = (props) => {
  const todos = useContext(TodoContext);
  return (
    <>
      <ul>
        {todos.todos.map((todo) => (
          <li>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
