import Timer from "./Timer";
import TimerView from "./TimerView";

function App() {
  const myTimer = new Timer();
  setInterval(() => {
    myTimer.increase();
  }, 1000);
  return (
    <>
      <TimerView timer={myTimer} />
    </>
  );
}

export default App;
