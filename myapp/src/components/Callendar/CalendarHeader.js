import React from "react";
import calendar from "../../images/icon-calendar.svg";

const CalendarHeader = () => {

    return (
        <div className="calendar-logo-container">
            <img className="calendar-logo" src={calendar} alt="calendar"/>
        </div>
    )
}

export default CalendarHeader;