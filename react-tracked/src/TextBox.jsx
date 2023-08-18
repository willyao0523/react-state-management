import { useDispatch } from "react-redux";
import { useTrackedState } from "./context";

const TextBox = ({ showCount }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const setText = (text) => {
    dispatch({
      type: "SET_TEXT",
      text,
    });
  };
  return (
    <div>
      <input value={state.text} onChange={(e) => setText(e.target.value)} />{" "}
      {showCount && <span>{state.count}</span>}
    </div>
  );
};

export default TextBox;
