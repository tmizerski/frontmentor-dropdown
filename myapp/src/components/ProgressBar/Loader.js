import React, {useEffect, useState} from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {multiMailer} from "../../helpers/multiMailer";


const Loader = ({action, data}) => {
    const [completed, setCompleted] = useState(0);
    const percent = Math.round(((100/data.length)*100))/100;
    const [count, setCount] = useState(0);
    const [actionAllowed, setActionAllowed] = useState(true)

    const addWidth = () => {
        if(completed !== 100 && actionAllowed === true) {
            if (count === (data.length-1)) {
                // console.log("ok")
                action(data[count], "tymek").then(r => setActionAllowed(false));
                console.log(data);

                setCompleted(100);
                setCount(count + 1);
                // localStorage.removeItem('progress')
            } else {
                // localStorage.setItem('progress', String(count+1));
                action(data[count], "tymek").then(r => setActionAllowed(true)).catch(err => setActionAllowed(false));
                console.log(action(data[count], "tymek"));
                setCompleted(completed + percent)
                setCount(count + 1)
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
