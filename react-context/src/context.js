import {createContext} from "react";

export const CountStateContext = createContext({
    count: 0,
    setCount: () => {}
})

export const ColorContext = createContext('black');
