import {useContext} from "react";
import {Count1Context} from "./context.jsx"

const Counter1 = () => {
    const [count1, setCount1] = useContext(Count1Context);
    return (
        <div>
            Count1: {count1}
            <button onClick={() => setCount1((c) => c + 1)}>
                +1
            </button>
        </div>);
};

export default Counter1;
