import {useContext} from "react";

import {CountStateContext} from './context.jsx'

const Component2 = () => {
    const {count, setCount} =
        useContext(CountStateContext);
    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => c + 2)}>
                +2
            </button>
        </div>
    );
};

export default Component2;
