import React from "react";
import CalendarDay from "./CalendarDay";


const Month = ({month}) => {
    return (
        <div className="month-grid--container">
            {month.map((row, k) => {
               return <React.Fragment key={k}>
                   {row.map((day, k) => {
                   return <CalendarDay day={day} key={k} />
                   })}
                </React.Fragment>
            })}
        </div>
    )
}

export default Month;