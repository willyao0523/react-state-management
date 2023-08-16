import { useAtom } from "jotai";
import { useCallback } from "react";
import MemoedTodoItem from "./TodoItem";
import { todoAtomsAtom } from "./context";

const TodoList = () => {
  const [todoAtoms, setTodoAtoms] = useAtom(todoAtomsAtom);
  const remove = useCallback(
    (todoAtom) =>
      setTodoAtoms((prev) => prev.filter((item) => item !== todoAtom)),
    [setTodoAtoms]
  );

  return (
    <div>
      {todoAtoms.map((todoAtom) => (
        <MemoedTodoItem
          key={`${todoAtom}`}
          todoAtom={todoAtom}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default TodoList;
