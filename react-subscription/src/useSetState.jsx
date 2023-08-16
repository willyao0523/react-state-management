import { useContext } from "react";
import { StoreContext } from "./context";

export const useSetState = () => {
  const store = useContext(StoreContext);
  return store.setState;
};
