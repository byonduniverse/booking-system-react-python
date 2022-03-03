import { useAppSelector, useAppDispatch } from '../store';
import { incrementMonth, decrementMonth, incrementYear, decrementYear } from './stores/monthViewSlice';


function getLang() {
    if (navigator.languages != undefined)
        return navigator.languages[0];
    return navigator.language;
}


const locale = getLang();


export default function TopBar() {

    const monthViewTime = useAppSelector(state => state.monthView.value);
    const monthView = new Date(monthViewTime);
    const dispatch = useAppDispatch();

    return (
<div className="calendar-topbar">

    <span className="calendar-date-box">
        <i className="bi bi-caret-left" onClick={() => dispatch(decrementYear())} />
        <span className="calendar-date">{monthView.getFullYear()}</span>
        <i className="bi bi-caret-right" onClick={() => dispatch(incrementYear())} />
    </span>
    <span className="calendar-date-box">
        <i className="bi bi-caret-left" onClick={() => dispatch(decrementMonth())} />
        <span className="calendar-date">{monthView.toLocaleString(locale, { month: "short" })}</span>
        <i className="bi bi-caret-right" onClick={() => dispatch(incrementMonth())} />
    </span>

</div>
    );
};

