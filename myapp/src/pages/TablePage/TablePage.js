import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {multiMailer} from "../../helpers/multiMailer";
import {LoaderContext} from "../../store/LoaderContext";
import Loader from "../../components/ProgressBar/Loader";

const data = [{value: 1}, {value: 2}, {value: 2},{value: 1}, {value: 2}, {value: 2},{value: 1}, {value: 2}, {value: 2},]

const TablePage = () => {
const {loading, dispatch} = useContext(LoaderContext);


    return(
        <div style={{height: "100%"}}>
        <button onClick={()=>dispatch({type: 'loading', payload:data})}>Klik</button>
            {loading && <Loader data={data} action={multiMailer}/>}
        </div>
    )
}

export default TablePage;
