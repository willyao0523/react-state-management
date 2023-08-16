import {Count1Provider, Count2Provider} from "./context.jsx"
import Parent from "./Parent.jsx";


function App() {

    return (
    <Count1Provider>
        <Count2Provider>
            <Parent/>
        </Count2Provider>
    </Count1Provider>
    );
}

export default App
