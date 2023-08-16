import {CountStateContext} from "./context"

import {useState} from "react";
import Parent from "./Parent.jsx";


function App() {
    const [count, setCount] = useState(0);
    return (
        <CountStateContext.Provider value={{count, setCount}}>
            <Parent/>
        </CountStateContext.Provider>
    )
}

export default App
