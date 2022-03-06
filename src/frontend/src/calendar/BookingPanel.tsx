import { Fragment, useEffect } from "react";
import { useAppSelector } from "../store";
import { useParams } from "react-router-dom";
import { getDailyBookings } from "./api";



export default function BookingPanel() {

    const { focussedDateTimestamp } = useAppSelector(state => state.focussedDate);

    const locale = useAppSelector(state => state.locale.value);

    const { slotID } = useParams() as { slotID: string };

    useEffect(() => {
        if (!focussedDateTimestamp) {
            return;
        }

        const fetchData = async () => {
            const bookings = await getDailyBookings(slotID, new Date(focussedDateTimestamp));
            console.log(bookings);
        }

        fetchData();
    });

    if (!focussedDateTimestamp) {
        return (<Fragment />);
    }
    
    const focussedDate = new Date(focussedDateTimestamp);

    return (
<div className="booking-panel">

    <div>
        {focussedDate.toLocaleString(locale, { weekday: "long" })}
        {", "}
        {focussedDate.toLocaleString(locale, { month: "long" })}
        {", "}
        {focussedDate.getDate()}
        {", "}
        {focussedDate.getFullYear()}
    </div>

</div>
    );
}

