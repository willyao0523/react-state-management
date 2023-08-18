import { useStore } from "../../app/zustandStore";

export default function Counter() {
  const count = useStore((state) => state.counter.value);
  const { increment, decrement } = useStore((state) => state.counterActions);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
