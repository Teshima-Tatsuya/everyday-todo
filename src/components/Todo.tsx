import React from "react";
import { ITodo } from "../types/todo";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

type TodoProps = {
  todo: ITodo;
};

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todo } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
  };
  console.log(todo);
  return (
    <>
      {todo.todo}
      <Checkbox checked={todo.isComplete} onChange={handleChange} />
    </>
  );
};

export default Todo;
