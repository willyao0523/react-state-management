import { useEffect, useState } from "react";

const useStore = (store) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState()); // [1]
    return unsubscribe;
  }, [store]);
  return [state, store.setState];
};

export default useStore;
