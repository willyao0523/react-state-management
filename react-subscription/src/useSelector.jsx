import { useContext, useMemo } from "react";
import { StoreContext } from "./context";
import { useSubscription } from "use-subscription";

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  return useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );
};
