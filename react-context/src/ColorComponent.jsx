import {memo, useContext, useEffect, useRef} from "react";
import {ColorContext} from "./context.js";

const ColorComponent = () => {
    const color = useContext(ColorContext);
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    });
    return (
        <div style={{color}}>
            Hello {color} (renders: {renderCount.current})
        </div>
    );
};

const MemoedColorComponent = memo(ColorComponent);

export {
    ColorComponent,
    MemoedColorComponent
}
