import { useDispatch } from "react-redux";
import { useTrackedState } from "./context";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useTrackedState();
  const inc = () => {
    dispatch({ type: "INC" });
  };
  return (
    <div>
      count: {count}
      <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter;
