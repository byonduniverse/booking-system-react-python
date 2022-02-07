import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementMonth, decrementMonth, incrementYear, decrementYear } from './dateSlice';


function getLang() {
    if (navigator.languages != undefined)
        return navigator.languages[0];
    return navigator.language;
}


const locale = getLang();


export default function TopBar() {

    const date = useSelector(state => state.date.value);
    const dispatch = useDispatch();

    return (
<div className="calendar-topbar">

    <span className="calendar-date-box">
        <i class="bi bi-caret-left" onClick={() => dispatch(decrementYear())} />
        <span className="calendar-date">{date.getFullYear()}</span>
        <i class="bi bi-caret-right" onClick={() => dispatch(incrementYear())} />
    </span>
    <span className="calendar-date-box">
        <i class="bi bi-caret-left" onClick={() => dispatch(decrementMonth())} />
        <span className="calendar-date">{date.toLocaleString(locale, { month: "short" })}</span>
        <i class="bi bi-caret-right" onClick={() => dispatch(incrementMonth())} />
    </span>

</div>
    );
};

