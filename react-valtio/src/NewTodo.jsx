import { useState } from "react";
import { createTodo } from "./context";

export default function NewTodo() {
  const [text, setText] = useState("");
  const onClick = () => {
    createTodo(text);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
}
