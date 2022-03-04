import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import type { RootState } from '../../store';


interface FocussedDateState {
    focussedDateTimestamp: number | null,
    focussedDayCellRef: RefObject<HTMLElement> | null,
}


const initialState: FocussedDateState = {
    focussedDateTimestamp: null,
    focussedDayCellRef: null
};


export const focussedDateSlice = createSlice({
    name: 'focussedDate',
    initialState,
    reducers: {
        setFocussedDate: (state, action: PayloadAction<number | null>) => {
            state.focussedDateTimestamp = action.payload;
        },
        setFocussedDayCell: (state, action: PayloadAction<RefObject<any> | null>) => {
            state.focussedDayCellRef = action.payload;
        },
        unfocusDate: (state) => {
            state.focussedDateTimestamp = null;
            state.focussedDayCellRef = null;
        }
    }
});


export const { setFocussedDate, setFocussedDayCell, unfocusDate } = focussedDateSlice.actions;
export default focussedDateSlice.reducer;
export const focussedDateSelector = (state: RootState) => state.focussedDate;

