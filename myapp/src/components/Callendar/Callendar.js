import React, {useState} from "react";
import "./Calendar.css";
import {getMonth} from "../../utils/calendarUtils";
import CalendarHeader from "./CalendarHeader";
import CalendarSidebar from "./CalendarSidebar";
import Month from "./Month";

const CalendarScheduler = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return(
        <div className="calendar-container">
            <CalendarHeader/>
            <div className="calendar-content--holder">
                <CalendarSidebar/>
                <Month month={currentMonth}/>
            </div>
        </div>
    )
}

export default CalendarScheduler;