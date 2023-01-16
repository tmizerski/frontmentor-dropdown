import React, {createContext, useEffect, useReducer} from "react";

export const ErrorContext = createContext();

export const errorReducer = (state, action) => {
    switch (action.type) {
        case "setError":
            return {error: action.payload};
        case 'removeError':
            return {error: null}
        default:
            return state
    }
}

export const ErrorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(errorReducer, {
        error: null
    })

    return(
        <ErrorContext.Provider
            value={{...state, dispatch}}
        >
            {children}
        </ErrorContext.Provider>
    )
}
