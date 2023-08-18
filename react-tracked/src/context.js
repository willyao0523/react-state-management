import { useEffect, useReducer } from "react";
import { createContainer } from "react-tracked";

const useValue = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "INC") {
        return {
          ...state,
          count: state.count + 1,
        };
      }
      if (action.type === "SET_TEXT") {
        return {
          ...state,
          text: action.text,
        };
      }
      throw new Error("unknown action type");
    },
    {
      count: 0,
      text: "hello",
    }
  );
  useEffect(() => {
    console.log("latest state:", state);
  }, [state]);
  return [state, dispatch];
};

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
