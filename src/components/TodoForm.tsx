import * as React from "react";

const TodoForm: React.FC = (props) => {
  const [text, setText] = React.useState("");
  return (
    <>
      <form id="todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="送信" />
      </form>
    </>
  );
};

export default TodoForm;
