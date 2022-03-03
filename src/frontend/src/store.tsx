import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import monthViewReducer from './calendar/stores/monthViewSlice';
import focussedDateReducer from './calendar/stores/focussedDateSlice';


export const store = configureStore({
    reducer: {
        monthView: monthViewReducer,
        focussedDate: focussedDateReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

