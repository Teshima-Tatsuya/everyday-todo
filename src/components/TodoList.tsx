import React, { useContext, useCallback } from "react";
import { TodoContext } from "../contexts/todo";
import Todo from "./Todo";

const TodoList: React.FC = (props) => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
