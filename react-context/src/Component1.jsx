const Component1 = ({count, setCount}) => (
    <div>
        {count}
        <button onClick={() => setCount((c) => c + 1)}>
            +1
        </button>
    </div>);

export default Component1;
