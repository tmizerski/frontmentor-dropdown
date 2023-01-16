import React, {useContext, useEffect, useState} from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {multiMailer} from "../../helpers/multiMailer";
import {LoaderContext} from "../../store/LoaderContext";
import Loader from "../../components/ProgressBar/Loader";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import {ErrorContext} from "../../store/ErrorContext";

const dataValue = [{value: 1}, {value: 2}, {value: 3},{value: 4}, {value:5}, {value: 6},{value: 7}, {value: 8}, {value: 9},]

const TablePage = () => {
const {loading, dispatch} = useContext(LoaderContext);
const { error } = useContext(ErrorContext);
const data = {
    completed: 0,
    count: 0,
    data: dataValue,
    actionAllowed: true,
    user: "tymek"
}

    return(
        <div style={{height: "100%"}}>
        <button onClick={()=>dispatch({type: 'loading', payload:data})}>Klik</button>
            {loading && <Loader data={JSON.parse(localStorage.getItem('loading')) || loading} action={multiMailer}/>}
            {error && <ErrorHandler error={error}/>}
        </div>
    )
}

export default TablePage;
