import { memo } from "react";
import { type TodoStoreState, type Todo, useTodoStore } from "./store";

const selectRemoveTodo = (state: TodoStoreState) => state.removeTodo;
const selectToggleTodo = (state: TodoStoreState) => state.toggleTodo;

const TodoItem = ({ todo }: { todo: Todo }) => {
  const removeTodo = useTodoStore(selectRemoveTodo);
  const toggleTodo = useTodoStore(selectToggleTodo);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);

export { MemoedTodoItem };
