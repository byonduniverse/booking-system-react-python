import { Fragment } from "react";
import { useAppSelector } from "../store";


export default function BookingPanel() {

    const { focussedDateTimestamp } = useAppSelector(state => state.focussedDate);
    if (!focussedDateTimestamp) {
        return (<Fragment />);
    }
    
    const focussedDate = new Date(focussedDateTimestamp);


    return (
<div className="booking-panel">

    <p>{focussedDate.toDateString()}</p>

</div>
    );
}

