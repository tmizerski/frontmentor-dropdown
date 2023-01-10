import React from "react";

const CalendarDay = ({day}) => {

    return(
        <div>
            {day.format()}
        </div>
    )
}

export default CalendarDay;