import {useContext} from "react";
import {ColorContext} from "./context.jsx"
const Component = () => {
    const color = useContext(ColorContext)
    return <div style={{ color }}>Hello {color}</div>
}

export default Component;
