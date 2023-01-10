import React from "react";
import dayjs from "dayjs";

const CalendarDay = ({day, rowIndex}) => {

    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current-day" : "";
    }

    return(
        <div className="day-container">
            <header>
                <p className={`${getCurrentDayClass()} day`}>{day.format('DD')}</p>
            </header>
        </div>
    )
}

export default CalendarDay;