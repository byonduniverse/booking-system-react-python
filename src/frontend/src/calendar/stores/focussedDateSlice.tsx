import { createSlice, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit';
import { RefObject } from 'react';
import type { RootState } from '../../store';


interface FocussedDateState {
    focussedDate: number | null,
    focussedDayCellRef: RefObject<HTMLElement> | null,
}


const initialState: FocussedDateState = {
    focussedDate: null,
    focussedDayCellRef: null
};


export const focussedDateSlice = createSlice({
    name: 'focussedDate',
    initialState,
    reducers: {
        setFocussedDate: (state, action: PayloadAction<number | null>) => {
            state.focussedDate = action.payload;
        },
        setFocussedDayCell: (state, action: PayloadAction<RefObject<any> | null>) => {
            state.focussedDayCellRef = action.payload;
        }
    }
});


export const { setFocussedDate, setFocussedDayCell } = focussedDateSlice.actions;
export default focussedDateSlice.reducer;
export const focussedDateSelector = (state: RootState) => state.focussedDate;

