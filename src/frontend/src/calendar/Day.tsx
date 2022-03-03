import { useAppSelector, useAppDispatch } from '../store';
import { setFocussedDate, setFocussedDayCell } from './stores/focussedDateSlice';
import { useRef } from 'react';


function selectDay(element: HTMLElement | null, dispatch: (_: any) => void, focussedElementId: string, cellDate: Date) {
    
    if (!element) {
        return;
    }

    if (element.classList.contains('calendar-day-cell')) {

        if (element.classList.contains('calendar-day-cell-selected')) {
            deselectDay(element);
            dispatch(setFocussedDate(null));
            dispatch(setFocussedDayCell(''));

        } else {

            const focussedElement = document.getElementById(focussedElementId);
            console.log(element.id);
            if (focussedElement) {
                deselectDay(focussedElement);
            }

            dispatch(setFocussedDate(cellDate.getTime()));
            dispatch(setFocussedDayCell(element.id));

            element.classList.add('calendar-day-cell-selected');
        }
    }
}

function deselectDay(element: HTMLElement) {
    element.classList.remove('calendar-day-cell-selected');
}


export default function DayCell({ monthView, dayNumber }: { monthView: Date, dayNumber: number }) {

    const { date, dayCellId } = useAppSelector(state => state.focussedDate);
    const dispatch = useAppDispatch();

    const currentDate = new Date();
    const cellDate = new Date(monthView.getFullYear(), monthView.getMonth(), dayNumber);

    const isToday = monthView.getFullYear() === currentDate.getFullYear() &&
        monthView.getMonth() === currentDate.getMonth() &&
        dayNumber === currentDate.getDate();

    const elementRef = useRef<HTMLElement>(null);

    return (
<span ref={elementRef} className="calendar-day-cell" onClick={(event) => selectDay(elementRef.current, dispatch, dayCellId, cellDate)}>

    <span className={"calendar-day-cell-number" + (isToday ? " current-day-number" : "")}>{dayNumber}</span>

    

</span>
    );
};

