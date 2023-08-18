import { useRecoilValue } from "recoil";
import { charCountState } from "./context";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}
