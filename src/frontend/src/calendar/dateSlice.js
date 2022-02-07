import { createSlice } from '@reduxjs/toolkit';


export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        value: new Date()
    },
    reducers: {
        incrementMonth: state => {
            state.value = new Date(state.value.setMonth(state.value.getMonth() + 1));
        },
        decrementMonth: state => {
            state.value = new Date(state.value.setMonth(state.value.getMonth() - 1));
        },
        incrementYear: state => {
            state.value = new Date(state.value.setFullYear(state.value.getFullYear() + 1));
        },
        decrementYear: state => {
            state.value = new Date(state.value.setFullYear(state.value.getFullYear() - 1));
        }
    }
});


export const { incrementMonth, decrementMonth, incrementYear, decrementYear } = dateSlice.actions;
export default dateSlice.reducer;

