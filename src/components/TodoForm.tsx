import React, { useContext, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import { TodoContext } from "../contexts/todo";

const TodoForm: React.FC = (props) => {
  const [text, setText] = React.useState("");
  const { add } = useContext(TodoContext);

  const addTodo = useCallback(() => {
    add(text);
    setText("");
  }, [text]);
  return (
    <>
      <TextField
        id="todoAdd"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        送信
      </Button>
    </>
  );
};

export default TodoForm;
