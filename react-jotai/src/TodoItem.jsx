import { memo } from "react";

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
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

export default MemoedTodoItem;
