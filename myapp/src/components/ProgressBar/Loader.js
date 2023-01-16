import React, {useContext, useEffect, useReducer, useState} from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {multiMailer} from "../../helpers/multiMailer";
import {LoaderContext} from "../../store/LoaderContext";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import {ErrorContext} from "../../store/ErrorContext";


const Loader = ({data, action}) => {
    //action musi zwracać promise
    const [completed, setCompleted] = useState(data.completed || 0);
    const percent = Math.round(((100/data.data.length)*100))/100;
    const [count, setCount] = useState(data.count || 0);
    const [actionAllowed, setActionAllowed] = useState(data.actionAllowed || true);
    const loaderContext = useContext(LoaderContext);
    const errorContext = useContext(ErrorContext);

    const setToStorage = () => {
        const currentData = {
            completed: completed,
            count: count+1,
            data: data.data,
            actionAllowed: actionAllowed,
            user: "tymek"
        }

        localStorage.setItem('loading', JSON.stringify(currentData));

    }

    const cleanStorage = () => {
        localStorage.removeItem('loading')
    }


    const addWidth = () => {
        console.log(actionAllowed)
        if(completed !== 100 && actionAllowed === true) {
            if (count === (data.data.length-1)) {
                action(data.data[count], "tymek").then(r => setActionAllowed(false));
                setCompleted(100);
                setCount(count + 1);
               cleanStorage();
                loaderContext.dispatch({type: "unload"})
            } else {
                action(data.data[count], "tymek").then(r => {
                        console.log(r)
                        setActionAllowed(true)
                        setCompleted(completed + percent)
                        setCount(count + 1)
                        setToStorage();
                        }).catch( err => {
                            loaderContext.dispatch({type: "unload"});
                            errorContext.dispatch({type: "setError", payload: "Podczas wysyłania danych wystąpił błąd"})
                            cleanStorage();
                            setActionAllowed(false)
                        });

            }
        }
    }

    useEffect(()=> {
        setTimeout(()=>{
            addWidth()
        }, 1000)
    })

    return(
        <div style={{height: "100%"}}>
            <ProgressBar completed={completed} bgcolor={"royalblue"} />
        </div>
    )
}

export default Loader;
