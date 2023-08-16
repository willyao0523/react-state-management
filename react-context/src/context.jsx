import {createContext, useState} from "react";

export const CountStateContext = createContext({
    count: 0,
    setCount: () => {
    }
})

export const ColorContext = createContext('black');

export const CountContext = createContext({count1: 0, count2: 0});

export const Count1Context = createContext([0, () => {
}])

export const Count1Provider = ({
                                   children
                               }) => {
    const [count1, setCount1] = useState(0);
    return (
        <Count1Context.Provider value={[count1, setCount1]}>
            {children}
        </Count1Context.Provider>
    );
}
export const Count2Context = createContext([0, () => {
}])
export const Count2Provider = ({
                                   children
                               }) => {
    const [count2, setCount2] = useState(0);
    return (
        <Count2Context.Provider value={[count2, setCount2]}>
            {children}
        </Count2Context.Provider>
    );
}

export const DispatchContext = createContext(()=> {});
