import { useAtom } from "jotai";
import { totalAtom } from "./context";

const Total = () => {
  const [total] = useAtom(totalAtom);
  return <>{total}</>;
};

export default Total;
