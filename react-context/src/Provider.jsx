import {Count2Context, Count1Context, DispatchContext} from "./context.jsx"
import {useReducer} from "react";

const Provider = ({children}) => {
    const [state, dispatch] = useReducer((prev, action) => {
        if (action.type === 'INC1') {
            return {...prev, count1: prev.count1 + 1}
        }
        if (action.type === 'INC2') {
            return {...prev, count2: prev.count2 + 1}
        }
        throw new Error("no matching action type")
    }, {
        count1: 0,
        count2: 0,
    })
    return (
        <DispatchContext.Provider value={dispatch}>
            <Count1Context.Provider value={state.count1}>
                <Count2Context.Provider value={state.count2}>
                    {children}
                </Count2Context.Provider>
            </Count1Context.Provider>
        </DispatchContext.Provider>
    )
}

export default Provider;
