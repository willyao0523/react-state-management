import Component1 from "./Component1"
import Component2 from "./Component2"

const Parent = ({count, setCount}) => {
    return <>
        <Component1 count={count} setCount={setCount} />
        <Component2 count={count} setCount={setCount} />
    </>
}

export default Parent;
