import { Provider } from "jotai";
import PersonComponent from "./PersonComponent";
import Total from "./Total";
import Counter from "./counter";
import { count1Atom, count2Atom, countAtom } from "./context";
import Counter1 from "./count1";
import Counter2 from "./count2";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import IncrementButton from "./IncrementButton";

function App() {
  return (
    <>
      <div>
        <Counter1 />
      </div>
      <div>
        <Counter2 />
      </div>
      <PersonComponent />
      (<Counter countAtom={count1Atom} />) + (
      <Counter countAtom={count2Atom} />
      ) =
      <Total />
      <br />
      <Provider>
        <h1>First Provider</h1>
        <div>
          <Counter countAtom={countAtom} />
        </div>
        <div>
          <Counter countAtom={countAtom} />
        </div>
      </Provider>
      <Provider>
        <h1>Second Provider</h1>
        <div>
          <Counter countAtom={countAtom} />
        </div>
        <div>
          <Counter countAtom={countAtom} />
        </div>
      </Provider>
      <br />
      <TodoList />
      <NewTodo />
      <IncrementButton />
    </>
  );
}

export default App;
