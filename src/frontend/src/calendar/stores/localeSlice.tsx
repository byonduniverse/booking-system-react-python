import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';


interface LocaleSlice {
    value: string
};


const initialState: LocaleSlice = {
    value: 'en'
};


export const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
export const localeSelector = (state: RootState) => state.locale.value;

