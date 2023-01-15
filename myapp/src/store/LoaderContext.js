import React, {createContext, useEffect, useReducer} from "react";

export const LoaderContext = createContext();

export const loaderReducer = (state, action) => {
    switch (action.type) {
        case "loading":
            return {loading: action.payload};
        case 'unload':
            return {loading: null}
        default:
            return state
    }
}

export const LoaderContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(loaderReducer, {
        loading: null
    })

    useEffect(()=>{
        const loading = localStorage.getItem('loading')
        if(loading) {
            dispatch({type: "loading", payload: JSON.parse(loading)})
        }
    })

    return(
        <LoaderContext.Provider
        value={{...state, dispatch}}
        >
            {children}
        </LoaderContext.Provider>
    )
}
