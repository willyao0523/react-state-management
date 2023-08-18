import { createStore } from "redux";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";

const initialState = {
  count: 0,
  text: "hello",
};

const reducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "SET_TEXT") {
    return { ...state, text: action.text };
  }
  return state;
};

export const store = createStore(reducer);

export const useTrackedState = createTrackedSelector(useSelector);
