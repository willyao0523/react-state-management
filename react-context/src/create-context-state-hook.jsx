import {createContext, useContext} from "react";

const createStateContext = (useValue) => {
    const StateContext = createContext(null);
    const StateProvider = ({
        initialValue,
        children
    }) => (
        <StateContext.Provider vlaue={useValue(initialValue)}>
            {children}
        </StateContext.Provider>
    )
    const useContextState = () => {
        const value = useContext(StateContext)
        if (value == null) {
            throw new Error("Provider missing")
        }
        return value
    }

    return [StateProvider, useContextState]
}

export default createStateContext;
