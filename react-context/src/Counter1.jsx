import {memo, useContext, useEffect, useRef} from "react";
import {CountContext} from "./context.jsx"
const Counter1 = () => {
    const {count1} = useContext(CountContext);
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    });
    return (
        <div>
            Count1: {count1} (renders: {renderCount.current})
        </div>
    );
};


const MemoedCounter1 = memo(Counter1);

export {
    Counter1,
    MemoedCounter1
}
