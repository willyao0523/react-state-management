import { useSnapshot } from "valtio";
import { state } from "./context";

export default function Counter1() {
  const snap = useSnapshot(state);
  const inc = () => ++state.count1;
  return (
    <div>
      {snap.count1} <button onClick={inc}> +1 </button>
    </div>
  );
}
