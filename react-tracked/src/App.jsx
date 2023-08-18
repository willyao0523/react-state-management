import Counter from "./Counter";
import TextBox from "./TextBox";
import { Provider } from "./context";

function App() {
  return (
    <>
      <Provider>
        <Counter />
        <Counter />
        <TextBox />
        <TextBox />
      </Provider>
    </>
  );
}

export default App;
