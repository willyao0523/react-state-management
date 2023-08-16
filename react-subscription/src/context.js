import { createContext, useRef } from "react";
import { createStore } from "./createStore";

export const StoreContext = createContext(
  createStore({
    count: 0,
    text: "hello",
  })
);

export const StoreProvider = ({ initialState, children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createStore(initialState);
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
