import React, {useContext, useEffect, useState} from "react";
import TableHead from "./TableHead";
import axios from "axios";
import "./DataTable.css";
import {ErrorContext} from "../../store/ErrorContext";

const DataTable = (props) => {
    const [data, setData] = useState(null);
    const [columns, setColumns] = useState(null);

    const {dispatch} = useContext(ErrorContext);

    const {fetchData} = props;

    const init = () => {
        axios.get(fetchData.url, {
            params: {
                limit: fetchData.options.limit || 1,
                currentPage: fetchData.options.currentPage || 25
            }
        }).then( r => {
            setData(r.data)
            setColumns(props.columns)
        }).catch(err => {
            dispatch({type: "setError", payload: err.data.message})
        })
    }

    useEffect(() => {
        init();
        return ()=>{
            return
        }
    }, [])

    return(
        <div className={"table-container"}>
            <table className="table">
                <thead>
                    <TableHead columns={props.columns} title={props.title}/>
                </thead>
                <tbody>
                {data && Array.isArray(data) &&
                    data.map((row, k) => {
                        return <tr key={k} className={"table-row"}>
                            {columns.map((col, index)=> {
                                return <td key={index}>{col.render(row)}</td>
                            })}
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;