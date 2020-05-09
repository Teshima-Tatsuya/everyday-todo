import React, { useContext } from "react";
import { ITodo } from "../types/todo";
import { TodoContext } from "../contexts/todo";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

type TodoProps = {
  todo: ITodo;
};

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todo } = props;
  const { toggleComplete } = useContext(TodoContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    toggleComplete(todo.docId);
  };

  return (
    <>
      {todo.todo}
      <Checkbox checked={todo.isComplete} onChange={handleChange} />
    </>
  );
};

export default Todo;
