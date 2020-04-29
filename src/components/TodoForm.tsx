import * as React from "react";
import { TextField, Button } from "@material-ui/core";

const TodoForm: React.FC = (props) => {
  const [text, setText] = React.useState("");
  return (
    <>
      <form id="todo-form">
        <TextField id="test" />
        <Button variant="contained" color="primary">
          送信
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
