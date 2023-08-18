import { useState } from "react";
import { createContainer } from "react-tracked";

const useValue = () =>
  useState({
    count: 0,
    text: "hello",
  });

const { Provider, useTracked } = createContainer(useValue);

export { Provider, useTracked };

// export const StateContext = createContext(null);

// export const Provider = ({ children }) => (
//   <StateContext.Provider value={useValue()}>{children}</StateContext.Provider>
// );

// export const useStateContext = () => {
//   const contextValue = useContext(StateContext);
//   if (contextValue === null) {
//     throw new Error("Please use Provider");
//   }
//   return contextValue;
// };
