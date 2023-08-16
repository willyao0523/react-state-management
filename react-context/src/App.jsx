import {useState} from 'react'

import './App.css'

import Parent from "./Parent.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <Parent count={count} setCount={setCount}/>
    )
}

export default App
