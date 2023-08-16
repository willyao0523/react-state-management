import { useMemo } from "react";
import { useSubscription } from "use-subscription";

// const useStoreSelector = (
//     store,
//     selector
//   ) => {
//     const [state, setState] =
//       useState(() => selector(store.getState()));
//     useEffect(() => {
//       const unsubscribe = store.subscribe(() => {
//         setState(selector(store.getState()));
//     });
//     setState(selector(store.getState()));
//     return unsubscribe;
//   }, [store, selector]);
//   return state;
// };

const useStoreSelector = (store, selector) =>
  useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );

export default useStoreSelector;
