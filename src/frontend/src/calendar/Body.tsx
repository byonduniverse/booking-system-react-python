import DayCell from './Day';
import DayPlaceholderCell from './DayPlaceholder';
import { useAppSelector } from '../store';
import { daysInMonth } from './calendar-utils';


export default function CalendarBody() {

    const monthViewTime = useAppSelector(state => state.monthView.value);
    const monthView = new Date(monthViewTime);

    const lastRowDays = daysInMonth(monthView.getMonth(), monthView.getFullYear()) - 28;

    return (
<div className="calendar-body">


    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<DayCell monthView={monthView} dayNumber={i+1} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<DayCell monthView={monthView} dayNumber={i+8} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<DayCell monthView={monthView} dayNumber={i+15} key={i} />), )}
    </div>
    <div className="calendar-body-row">
        {Array(7).fill(0).map((_, i) => (<DayCell monthView={monthView} dayNumber={i+22} key={i} />), )}
    </div>
    {lastRowDays > 0 &&
    <div className="calendar-body-row">
        {Array(lastRowDays)
            .fill(0)
            .map((_, i) => (<DayCell monthView={monthView} dayNumber={i+29} key={i} />), )}
        {Array(7 - lastRowDays)
            .fill(0)
            .map((_, i) => (<DayPlaceholderCell key={i} />), )}
    </div>
    }

</div>
    );
};

