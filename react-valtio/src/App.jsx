import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <div>
        <Counter1 />
      </div>
      <div>
        <Counter2 />
      </div>

      <div>
        <TodoList />
        <NewTodo />
      </div>
    </>
  );
}

export default App;
