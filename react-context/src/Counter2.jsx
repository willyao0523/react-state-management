import {memo, useContext, useEffect, useRef} from "react";
import {CountContext} from "./context"
const Counter2 = () => {
    const {count2} = useContext(CountContext);
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    });
    return (
        <div>
            Count2: {count2} (renders: {renderCount.current})
        </div>
    );
};


const MemoedCounter2 = memo(Counter2);

export {
    Counter2,
    MemoedCounter2
}
