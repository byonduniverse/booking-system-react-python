import focussedDate from './globals';

function getLang() {
    if (navigator.languages != undefined)
        return navigator.languages[0];
    return navigator.language;
}


function changeMonth(date, quantity) {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + quantity);
    return newDate;
}


function changeYear(date, quantity) {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + quantity);
    return newDate;
}


const locale = getLang();


export default function TopBar() {
    return (
<div className="calendar-topbar">

    <span className="calendar-date-box">
        <i class="bi bi-caret-left" onClick={() => focussedDate = changeYear(date, -1)} />
        <span className="calendar-date">{focussedDate.getFullYear()}</span>
        <i class="bi bi-caret-right" onClick={() => focussedDate = changeYear(date, 1)} />
    </span>
    <span className="calendar-date-box">
        <i class="bi bi-caret-left" onClick={() => focussedDate = changeMonth(date, -1)} />
        <span className="calendar-date">{focussedDate.toLocaleString(locale, { month: "short" })}</span>
        <i class="bi bi-caret-right" onClick={() => focussedDate = changeMonth(date, 1)} />
    </span>

</div>
    );
};

