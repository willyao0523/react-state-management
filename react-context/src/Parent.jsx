import CounterOne from "./CounterOne.jsx";
import CounterTwo from "./CounterTwo.jsx";


const Parent = () => {
    return <ul>
        <CounterOne />
        <CounterOne />
        <CounterTwo />
        <CounterTwo />
    </ul>
}

export default Parent;
