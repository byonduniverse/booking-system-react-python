import TopBar from "./TopBar";
import CalendarBody from "./Body";
import BookingPanel from "./BookingPanel";
import { Fragment } from "react";


export default function Calendar() {
    return (
<Fragment>

        <div className="calendar">
            <TopBar />
            <CalendarBody />
        </div>
        <BookingPanel />

</Fragment>
    );
};

