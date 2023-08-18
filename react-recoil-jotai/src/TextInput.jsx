import { useRecoilState } from "recoil";
import { textState } from "./context";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <br />
      Echo: {text}
    </div>
  );
}
