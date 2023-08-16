import {memo, useEffect, useRef} from "react";

const DummyComponent = () => {
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    });
    return <div>Dummy (renders: {renderCount.current})</div>;
};

const MemoedDummyComponent = memo(DummyComponent)

export {
    DummyComponent,
    MemoedDummyComponent
}
