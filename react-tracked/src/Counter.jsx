import { useTracked } from "./context";

const Counter = () => {
  const [state, dispatch] = useTracked();
  const inc = () => {
    dispatch({ type: "INC" });
  };
  return (
    <div>
      count: {state.count}
      <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter;
