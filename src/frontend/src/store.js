import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './calendar/dateSlice';


export default configureStore({
    reducer: {
        date: dateReducer
    },
});
