import { useStore, type StoreState } from "./store";

const selectTotal = (state: StoreState) => state.count1 + state.count2;

const Total = () => {
  const total = useStore(selectTotal);
  return <div>total: {total}</div>;
};

export default Total;
