import { useAtom } from "jotai";
import { charCountAtom } from "./jotaiContext";

export default function CharacterCount() {
  const [count] = useAtom(charCountAtom);
  return <>Character Count: {count}</>;
}
