import React from "react";
import CalendarDay from "./CalendarDay";
import MonthHeader from "./MonthHeader";


const Month = ({month}) => {
    return (
        <div className="month-container">
            <MonthHeader month={month}/>
        <div className="month-grid-container">

            {month.map((row, k) => {
               return <React.Fragment key={k}>
                   {row.map((day, key) => {
                   return <CalendarDay day={day} key={key} rowIndex={k} />
                   })}
                </React.Fragment>
            })}
        </div>
        </div>
    )
}

export default Month;