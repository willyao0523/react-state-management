import {useContext} from "react";
import {Count1Context, DispatchContext} from "./context.jsx"

const Counter1 = () => {
    const count1 = useContext(Count1Context);
    const dispatch = useContext(DispatchContext);
    return (
        <div>
            Count1: {count1}
            <button onClick={() => dispatch({ type: "INC1" })}>
                +1 </button>
        </div> );
};

export default Counter1;
