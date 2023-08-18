import { useSnapshot } from "valtio";
import { todoState } from "./context";
import MemoedTodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSnapshot(todoState);
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem key={todo.id} id={todo.id} />
      ))}
    </div>
  );
}
