import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';


interface FocussedDateState {
    date: number | null,
    dayCellId: string
}


const initialState: FocussedDateState = {
    date: null,
    dayCellId: ''
};


export const focussedDateSlice = createSlice({
    name: 'focussedDate',
    initialState,
    reducers: {
        setFocussedDate: (state, action: PayloadAction<number | null>) => {
            state.date = (typeof action.payload === "number") ? action.payload : null;
        },
        setFocussedDayCell: (state, action: PayloadAction<string>) => {
            state.dayCellId = action.payload;
        }
    }
});


export const { setFocussedDate, setFocussedDayCell } = focussedDateSlice.actions;
export default focussedDateSlice.reducer;
export const focussedDateSelector = (state: RootState) => state.focussedDate;

