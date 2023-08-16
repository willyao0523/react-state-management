import {CountContext} from "./context"

import {useState} from "react";
import Parent from "./Parent.jsx";


function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    return (
        <CountContext.Provider value={{ count1, count2 }}>
            <button onClick={() => setCount1((c) => c + 1)}>
                {count1}
            </button>
            <button onClick={() => setCount2((c) => c + 1)}>
                {count2}
            </button>
            <Parent />
        </CountContext.Provider>
    );
}

export default App
