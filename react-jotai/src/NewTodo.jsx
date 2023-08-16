import { useState } from "react";
import { todoAtomsAtom } from "./context";
import { atom, useAtom } from "jotai";

const NewTodo = () => {
  const [, setTodoAtoms] = useAtom(todoAtomsAtom);
  const [text, setText] = useState("");
  const onClick = () => {
    setTodoAtoms((prev) => [...prev, atom({ title: text, done: false })]);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
};

export default NewTodo;
