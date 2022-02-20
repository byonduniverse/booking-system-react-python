import Day from './Day';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function daysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
}


async function getMonthlyBookings(slotID, date) {

    const starPeriod = new Date(date.getFullYear(), date.getMonth());
    const endPeriod = new Date(date.getFullYear(), daysInMonth(date.getMonth(), date.getFullYear()));

    const response = await fetch(`/slots/${slotID}/already_booked?start_period=${starPeriod}&end_period=${endPeriod}`);

    return response.json().bookings;
}


export default function CalendarBody() {

    const date = useSelector(state => state.date.value);

    const { slotID } = useParams();

    const bookings = await getMonthlyBookings(slotID);


    return (
<div className="calendar-body">

    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+1} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+8} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+15} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day dayNumber={i+22} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(
            daysInMonth(date.getMonth(),
            date.getFullYear())-27).fill(0)
            .map((_, i) => (<Day dayNumber={i+28} />), )}
    </div>

</div>
    );
};

