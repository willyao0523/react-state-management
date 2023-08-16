import { useAtom } from "jotai";
import { incrementCountAtom } from "./context";

const IncrementButton = () => {
  const [, incrementCount] = useAtom(incrementCountAtom);
  return <button onClick={incrementCount}>click</button>;
};

export default IncrementButton;
