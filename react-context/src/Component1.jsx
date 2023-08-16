import {useContext} from "react";

import {CountStateContext} from './context.jsx'

const Component1 = () => {
    const {count, setCount} =
        useContext(CountStateContext);
    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => c + 1)}>
                +1
            </button>
        </div>
    );
};

export default Component1;
