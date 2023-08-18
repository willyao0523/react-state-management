import { memo } from "react";
import { removeTodo, todoState, toggleTodo } from "./context";
import { useSnapshot } from "valtio";

function TodoItem({ id }) {
  const foundTodo = todoState.todos.find((todo) => todo.id === id);
  if (!foundTodo) {
    throw new Error("invalid todo id");
  }
  const { title, done } = useSnapshot(foundTodo);
  return (
    <div>
      <input type="checkbox" checked={done} onChange={() => toggleTodo(id)} />
      <span style={{ textDecoration: done ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
}

const MemoedTodoItem = memo(TodoItem);

export default MemoedTodoItem;
