import React from "react";
import { ITodo } from "../types/todo";

type TodoProps = {
  todo: ITodo;
};

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  return <>{props.todo.todo}</>;
};

export default Todo;
