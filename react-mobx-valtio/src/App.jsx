import TimerView from "./TimerView";
import { increase } from "./valtioTimer";

setInterval(() => {
  increase();
}, 1000);

function App() {
  return (
    <>
      <TimerView />
    </>
  );
}

export default App;
