import TopBar from "./TopBar";
import CalendarBody from "./Body";
import BookingPanel from "./BookingPanel";
import { Fragment } from "react";
import { useAppDispatch } from "../store";
import { setLocale } from "./stores/localeSlice";
import { getLang } from "./calendar-utils";


export default function Calendar() {

    const dispatch = useAppDispatch();

    // Set the locale to the browser language for the calendar
    dispatch(setLocale(getLang()));

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

