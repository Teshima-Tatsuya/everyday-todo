import React, { useContext } from "react";
import { ITodo } from "../types/todo";
import { TodoContext } from "../contexts/todo";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
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
  const { toggleComplete, remove } = useContext(TodoContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    toggleComplete(todo.docId);
  };

  const handleRemove = (event: any) => {
    console.log("removed");
    remove(todo.docId);
  };

  return (
    <>
      <TodoText primary={todo.todo} completed={todo.isComplete} />
      <Checkbox checked={todo.isComplete} onChange={handleChange} />
      <Button onClick={handleRemove}>削除</Button>
    </>
  );
};

export default Todo;
