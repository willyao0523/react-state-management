import { useAtom } from "jotai";
import { todosAtom } from "./context";
import { useCallback } from "react";
import MemoedTodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const removeTodo = useCallback(
    (id) => setTodos((prev) => prev.filter((item) => item.id !== id)),
    [setTodos]
  );
  const toggleTodo = useCallback(
    (id) =>
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                done: !item.todo,
              }
            : item
        )
      ),
    [setTodos]
  );
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
