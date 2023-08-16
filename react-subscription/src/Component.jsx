import { useSelector } from "./useSelector";
import { useSetState } from "./useSetState";

const selectCount = (state) => state.count;

const Component = () => {
  const count = useSelector(selectCount);
  const setState = useSetState();
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      count: {count} <button onClick={inc}>+1</button>
    </div>
  );
};

export default Component;
