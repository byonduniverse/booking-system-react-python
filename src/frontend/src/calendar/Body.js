import Day from './Day';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function daysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}


async function getMonthlyBookings(slotID, date) {

    const starPeriod = new Date(date.getFullYear(), date.getMonth()).toISOString().slice(0,-5)+"Z";
    const endPeriod = new Date(date.getFullYear(), daysInMonth(date.getMonth(), date.getFullYear())).toISOString().slice(0,-5)+"Z";

    const response = await fetch(`http://localhost:5000/api/slots/${slotID}/already_booked?start_period=${starPeriod}&end_period=${endPeriod}`);
    
    const data = await response.json();
    console.log(data);
    return data.bookings;
}


export default function CalendarBody() {

    const date = useSelector(state => state.date.value);

    const { slotID } = useParams();

    useEffect(() => {
        getMonthlyBookings(slotID, date);
    }, [date]);

    return (
<div className="calendar-body">


    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+1} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+8} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+15} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+22} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(
            daysInMonth(date.getMonth(), date.getFullYear()) - 28)
            .fill(0)
            .map((_, i) => (<Day dayNumber={i+29} key={i} />), )}
    </div>

</div>
    );
};

