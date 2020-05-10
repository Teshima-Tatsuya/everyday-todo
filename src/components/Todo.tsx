import React, { useContext } from "react";
import { ITodo } from "../types/todo";
import { TodoContext } from "../contexts/todo";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components/macro";

type TodoProps = {
  todo: ITodo;
};

const TodoText = styled(ListItemText)<{ completed: boolean }>`
  && {
    opacity: ${({ completed }) => (completed ? "0.5" : "1.0")};
    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
    font-color: ${({ completed }) => (completed ? "black" : "gray")};
  }
`;

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { todo } = props;
  const { toggleComplete } = useContext(TodoContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    toggleComplete(todo.docId);
  };

  return (
    <>
      <TodoText primary={todo.todo} completed={todo.isComplete} />
      <Checkbox checked={todo.isComplete} onChange={handleChange} />
    </>
  );
};

export default Todo;
