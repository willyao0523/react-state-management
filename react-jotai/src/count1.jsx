import { useAtom } from "jotai";
import { countAtom } from "./context";

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      counter1: {count} <button onClick={inc}>+1</button>
    </>
  );
};

export default Counter1;
