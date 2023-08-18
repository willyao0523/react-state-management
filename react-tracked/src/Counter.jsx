import { useTracked } from "./context";

const Counter = () => {
  //   const [state, setState] = useStateContext();
  const [state, setState] = useTracked();
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      count: {state.count}
      <button onClick={inc}>+1</button>
    </div>
  );
};

export default Counter;
