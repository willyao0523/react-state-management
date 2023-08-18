import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./features/counter/counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
