import React, { useState } from "react";

const SnackbarContext = React.createContext({
    msg: "",
    type: "",
    isDisplayed: false,
    displayMsg: (msg) => { },
    onCLose: () => {},
})

export default  SnackbarContext;

export const SnackBarContextProvider = (props) => {
    const [ msg, setMsg ] = useState("");
    const [ isDisplayed, setIsDisplayed ] = useState(false);
    const [ type, setType ] = useState("");
    let timer;

    const displayHandler = (msg, type) => {
        setMsg(msg);
        setIsDisplayed(true) ;
        setType(type);
        timer = setTimeout(()=>{
            closeHandler();
        }, 3000);
    }

    const closeHandler = () => {
        clearTimeout(timer);
        setIsDisplayed(false);
    }

    return(
        <SnackbarContext.Provider
            value={{
                msg,
                type,
                isDisplayed,
                displayMsg: displayHandler,
                onCLose: closeHandler}}>
            {props.children}
        </SnackbarContext.Provider>
    )
}