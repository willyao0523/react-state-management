import { useAtom } from "jotai";

const Counter = ({ countAtom }) => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      count: {count} <button onClick={inc}>+1</button>
    </>
  );
};

export default Counter;
