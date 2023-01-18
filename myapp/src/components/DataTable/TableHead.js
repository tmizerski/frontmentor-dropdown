import React from "react";
import Search from "../Search/Search";


const TableHead = (props) => {

    return (
        <>
            <tr className={"table-row table-head title"}>
                <td className={"title-span"}>{props.title}</td>
            </tr>
            <tr className={"table-row table-head"}>
                <th><Search /></th>
            </tr>
            <tr className={"table-row table-head"}>
                {props.columns.map((col, index) => {
                    return <th key={index}>{col.label}</th>
                })}
            </tr>
        </>
    )
}

export default TableHead;