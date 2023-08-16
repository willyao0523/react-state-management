import { useAtom } from "jotai";
import { fullNameAtom } from "./context";

const PersonComponent = () => {
  const [person] = useAtom(fullNameAtom);

  return (
    <>
      {person.firstName} {person.lastName}
    </>
  );
};
export default PersonComponent;
