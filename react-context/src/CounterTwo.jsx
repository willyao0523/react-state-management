import {useContext} from "react";
import {Count2Context, DispatchContext} from "./context.jsx"

const Counter2 = () => {
    const count2 = useContext(Count2Context);
    const dispatch = useContext(DispatchContext);
    return (
        <div>
            Count2: {count2}
            <button onClick={() => dispatch({ type: "INC2" })}>
                +1 </button>
        </div> );
};

export default Counter2;
