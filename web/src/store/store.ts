import { configureStore } from '@reduxjs/toolkit';
import {appPopUpReducer} from './appPopUpSlice.ts';
import {countriesReducer} from "@/store/countriesSlice.ts";

export const store = configureStore({
    reducer: {
        appPopUp: appPopUpReducer,
        countries: countriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
