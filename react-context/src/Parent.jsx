
import {DummyComponent, MemoedDummyComponent} from "./DummyComponent.jsx";
import {ColorComponent, MemoedColorComponent} from "./ColorComponent.jsx";


const Parent = () => {
    return <ul>
        <li><DummyComponent /></li>
        <li><MemoedDummyComponent /></li>
        <li><ColorComponent /></li>
        <li><MemoedColorComponent /></li>
    </ul>
}

export default Parent;
