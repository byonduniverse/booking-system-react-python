import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';


interface MonthViewState {
    value: number
};


const initialState: MonthViewState = {
    value: new Date().getTime()
};


export const monthViewSlice = createSlice({
    name: 'monthView',
    initialState,
    reducers: {
        incrementMonth: (state) => {
            const newDate = new Date(state.value);
            newDate.setMonth(newDate.getMonth() + 1);
            state.value = newDate.getTime();
        },
        decrementMonth: (state) => {
            const newDate = new Date(state.value);
            newDate.setMonth(newDate.getMonth() - 1);
            state.value = newDate.getTime();
        },
        incrementYear: (state) => {
            const newDate = new Date(state.value);
            newDate.setFullYear(newDate.getFullYear() + 1);
            state.value = newDate.getTime();
        },
        decrementYear: (state) => {
            const newDate = new Date(state.value);
            newDate.setFullYear(newDate.getFullYear() - 1);
            state.value = newDate.getTime();
        }
    }
});


export const { incrementMonth, decrementMonth, incrementYear, decrementYear } = monthViewSlice.actions;
export default monthViewSlice.reducer;
export const monthViewSelector = (state: RootState) => state.monthView.value;

