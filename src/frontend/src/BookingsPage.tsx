import { Fragment } from "react";
import Calendar from "./calendar/Calendar";


export default function BookingsPage() {
    return (
<Fragment>
    
    <h2>Book a Kebab</h2>
    <p>Please, select a date and time to book a kebab.</p>

    <Calendar />

</Fragment>
    );
};

