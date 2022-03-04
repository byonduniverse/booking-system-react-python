import { useAppSelector, useAppDispatch } from '../store';
import { setFocussedDate, setFocussedDayCell } from './stores/focussedDateSlice';
import { useRef } from 'react';


function selectDayCell(newElementRef: React.RefObject<HTMLElement>, dispatch: (_: any) => void, focussedElementRef: React.RefObject<HTMLElement> | null, newCellDate: Date) {

    const newElement = newElementRef.current;
    if (!newElement) {
        return;
    }

    if (newElement.classList.contains('calendar-day-cell')) {

        if (newElement.classList.contains('calendar-day-cell-selected')) {
            deselectDayCell(newElement);
            dispatch(setFocussedDate(null));
            dispatch(setFocussedDayCell(null));

        } else {

            if (focussedElementRef && focussedElementRef.current) {
                deselectDayCell(focussedElementRef.current);   
            }

            dispatch(setFocussedDate(newCellDate.getTime()));
            dispatch(setFocussedDayCell(newElementRef));

            newElement.classList.add('calendar-day-cell-selected');
        }
    }
}

export function deselectDayCell(element: HTMLElement) {
    element.classList.remove('calendar-day-cell-selected');
}


export default function DayCell({ monthView, dayNumber }: { monthView: Date, dayNumber: number }) {

    const { focussedDayCellRef } = useAppSelector(state => state.focussedDate);
    const dispatch = useAppDispatch();

    const currentDate = new Date();
    const cellDate = new Date(monthView.getFullYear(), monthView.getMonth(), dayNumber);

    const isToday = monthView.getFullYear() === currentDate.getFullYear() &&
        monthView.getMonth() === currentDate.getMonth() &&
        dayNumber === currentDate.getDate();

    const elementRef = useRef<HTMLElement>(null);

    return (
<span ref={elementRef} className="calendar-day-cell" onClick={() => selectDayCell(elementRef, dispatch, focussedDayCellRef, cellDate)}>

    <span className={"calendar-day-cell-number" + (isToday ? " current-day-number" : "")}>{dayNumber}</span>

    

</span>
    );
};

