import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo";

const TodoList: React.FC = (props) => {
  const { todos, remove } = useContext(TodoContext);
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.todo} <button onClick={remove}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
