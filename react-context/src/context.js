import {createContext} from "react";

export const CountStateContext = createContext({
    count: 0,
    setCount: () => {}
})

export const ColorContext = createContext('black');

export const CountContext = createContext({ count1: 0, count2: 0 });
