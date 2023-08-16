import { useAtom } from "jotai";
import { countAtom } from "./context";

const Counter2 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      counter2: {count} <button onClick={inc}>+1</button>
    </>
  );
};

export default Counter2;
