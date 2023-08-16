
import {MemoedCounter1} from "./Counter1.jsx";
import {MemoedCounter2} from "./Counter2.jsx";


const Parent = () => {
    return <ul>
        <MemoedCounter1 />
        <MemoedCounter2 />
    </ul>
}

export default Parent;
