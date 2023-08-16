import { useMemo } from "react";
import { store } from "./createStore";

import { useSubscription } from "use-subscription";

const Component1 = () => {
  const state = useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => store.getState().count1,
        subscribe: store.subscribe,
      }),
      []
    )
  );
  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };
  return (
    <div>
      count1: {state} <button onClick={inc}>+1</button>
    </div>
  );
};
export default Component1;
