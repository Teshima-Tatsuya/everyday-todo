import React, { useContext, useCallback } from "react";
import { TodoContext } from "../contexts/todo";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const TodoList: React.FC = (props) => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <List>
        {todos.map((todo) => (
          <ListItem>
            <Todo todo={todo} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TodoList;
