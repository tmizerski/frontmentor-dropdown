import React, { useState } from "react";

const SnackbarContext = React.createContext({
    msg: "",
    isDisplayed: false,
    displayMsg: (msg) => { },
    onCLose: () => {},
})

export default  SnackbarContext;

export const SnackBarContextProvider = (props) => {
    const [ msg, setMsg ] = useState("");
    const [ isDisplayed, setIsDisplayed ] = useState(false)
    let timer;

    const displayHandler = (msg) => {
        setMsg(msg);
        setIsDisplayed(true) ;
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
                isDisplayed,
                displayMsg: displayHandler,
                onCLose: closeHandler}}>
            {props.children}
        </SnackbarContext.Provider>
    )
}