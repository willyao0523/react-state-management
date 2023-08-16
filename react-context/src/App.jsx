import {ColorContext} from "./context"

import {useState} from "react";
import Parent from "./Parent.jsx";


function App() {
    const [color, setColor] = useState('red');
    return (
        <ColorContext.Provider value={color}>
            <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <Parent/>
        </ColorContext.Provider>
    );
}

export default App
