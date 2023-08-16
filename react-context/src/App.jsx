import {ColorContext} from "./context"
import Component from "./Component"


function App() {

    return <>
        <Component />
        <ColorContext.Provider value="red">
            <Component />
        </ColorContext.Provider>
        <ColorContext.Provider value="green">
            <Component />
        </ColorContext.Provider>
        <ColorContext.Provider value="blue">
            <Component />
            <ColorContext.Provider value="skyblue">
                <Component />
            </ColorContext.Provider>
        </ColorContext.Provider>
    </>
}

export default App
