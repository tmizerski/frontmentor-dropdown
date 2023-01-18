import React from "react";
import Search from "../Search/Search";


const TableHead = (props) => {

    return (
        <>
            <tr className={"table-row table-head title"}>
                <td className={"title-container"}>
                    <span>{props.title || ""}</span>
                    {props.subTitle && <p className={"subtitle"}>{props.subTitle}</p>}
                </td>
            </tr>
            <tr className={"table-row table-head"}>
                <th><Search filterSearch={props.filterSearch}/></th>
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