import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './reducers/toastSlice';
import languageReducer from './reducers/languageSlice';
import { apiSlice } from './api/apiSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            toast: toastReducer,
            language: languageReducer,
            [apiSlice.reducerPath]: apiSlice.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
