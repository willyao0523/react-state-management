import { reset, useSecondsPasses } from "./valtioTimer";

export default function TimerView() {
  const secondsPassed = useSecondsPasses();
  return <button onClick={reset}>seconds passed: {secondsPassed}</button>;
}
