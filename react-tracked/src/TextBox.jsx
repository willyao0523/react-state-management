import { useTracked } from "./context";

const TextBox = () => {
  //   const [state, setState] = useStateContext();
  const [state, setState] = useTracked();
  const setText = (text) => {
    setState((prev) => ({ ...prev, text }));
  };
  return (
    <div>
      <input value={state.text} onChange={(e) => setText(e.target.value)} />{" "}
    </div>
  );
};

export default TextBox;
