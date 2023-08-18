import Counter from "./Counter";
import TextBox from "./TextBox";
import { store } from "./context";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Counter />
        <TextBox />
        <TextBox />
      </div>
    </Provider>
  );
}

export default App;
