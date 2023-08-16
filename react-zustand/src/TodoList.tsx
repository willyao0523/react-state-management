import { MemoedTodoItem } from "./TodoItem";
import { useTodoStore, type TodoStoreState } from "./store";

const selectTodos = (state: TodoStoreState) => state.todos;

const TodoList = () => {
  const todos = useTodoStore(selectTodos);
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
