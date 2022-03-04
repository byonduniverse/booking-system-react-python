import { useAppSelector, useAppDispatch } from '../store';
import { incrementMonth, decrementMonth, incrementYear, decrementYear } from './stores/monthViewSlice';
import { unfocusDate } from './stores/focussedDateSlice';
import { deselectDayCell } from './Day';


function getLang() {
    if (navigator.languages != undefined)
        return navigator.languages[0];
    return navigator.language;
}


const locale = getLang();


function changeMonthView(dispatch: (_: any) => void, action: () => void, focussedDayCellRef: React.RefObject<HTMLElement> | null) {
    if (focussedDayCellRef && focussedDayCellRef.current) {
        deselectDayCell(focussedDayCellRef.current);
    }
    dispatch(action());
    dispatch(unfocusDate());
}


export default function TopBar() {

    const monthViewTime = useAppSelector(state => state.monthView.value);
    const monthView = new Date(monthViewTime);
    const { focussedDayCellRef } = useAppSelector(state => state.focussedDate);
    const dispatch = useAppDispatch();

    return (
<div className="calendar-topbar">

    <span className="calendar-date-box">
        <i className="bi bi-caret-left" onClick={() => changeMonthView(dispatch, decrementYear, focussedDayCellRef)} />
        <span className="calendar-date">{monthView.getFullYear()}</span>
        <i className="bi bi-caret-right" onClick={() => changeMonthView(dispatch, incrementYear, focussedDayCellRef)} />
    </span>
    <span className="calendar-date-box">
        <i className="bi bi-caret-left" onClick={() => changeMonthView(dispatch, decrementMonth, focussedDayCellRef)} />
        <span className="calendar-date">{monthView.toLocaleString(locale, { month: "short" })}</span>
        <i className="bi bi-caret-right" onClick={() => changeMonthView(dispatch, incrementMonth, focussedDayCellRef)} />
    </span>

</div>
    );
};

