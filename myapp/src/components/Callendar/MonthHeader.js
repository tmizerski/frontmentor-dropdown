import React from "react";

const MonthHeader = ({month}) => {

    return (
        <div className="month-header">
            {month.map((row, k)=> {
                return <React.Fragment>
                    {row.map((day, key) => {
                        return k === 0 && <div className="month-header-item" key={key}>{day.format("ddd").toUpperCase()}</div>
                    })}
                </React.Fragment>
            })}
        </div>
    )
}

export default MonthHeader;