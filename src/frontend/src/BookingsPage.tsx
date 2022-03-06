import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "./calendar/Calendar";
import { isValidSlot } from "./calendar/api";


export default function BookingsPage() {

    const { slotID } = useParams();
    if (!slotID) {
        return (<div>No slotID provided</div>);
    }

    const [ shouldShowCalendar, setShouldShowCalendar ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const isValid = await isValidSlot(slotID);
            setShouldShowCalendar(isValid);
        };

        fetchData();
    }, [slotID]);


    return (
<Fragment>
    
    <h2>Book a Kebab</h2>
    <p>Please, select a date and time to book a kebab.</p>

    {(() => {
        if (shouldShowCalendar) {
            return <Calendar />
        } 
        return <div>Sorry, slot "{slotID}" is not available</div>;
    })()}

</Fragment>
    );
};

