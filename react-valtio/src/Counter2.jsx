import { useSnapshot } from "valtio";
import { state } from "./context";

export default function Counter2() {
  const snap = useSnapshot(state);
  const inc = () => ++state.count2;
  return (
    <div>
      {snap.count2} <button onClick={inc}> +1 </button>
    </div>
  );
}
