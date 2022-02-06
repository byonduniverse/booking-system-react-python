import Day from './Day';
import focussedDate from './globals';


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


export default function CalendarBody(props) {
    return (
<div className="calendar-body">

    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day number={i+1} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day number={i+8} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<Day number={i+15} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(
            daysInMonth(focussedDate.getMonth(),
            focussedDate.getFullYear())-21).fill(0)
            .map((_, i) => (<Day number={i+22} />), )}
    </div>

</div>
    );
};

