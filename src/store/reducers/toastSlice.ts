import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ToastCategory = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface ToastItemEntry {
    id?: number;
    category?: ToastCategory;
    title?: string;
    message: string;
}

interface ToastState {
    entries: ToastItemEntry[];
}

// Define the initial state using that type
const initialState: ToastState = {
    entries: []
};

export const toastSlice = createSlice({
    name: 'toast',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToast: (state, action: PayloadAction<ToastItemEntry>) => {
            state.entries.push({ ...action.payload, id: state.entries.length + 1 });
        },
        removeToast: (state, action: PayloadAction<number>) => {
            const foundIndex = state.entries.findIndex((entry) => entry.id === action.payload);
            if (foundIndex !== -1) {
                state.entries.splice(foundIndex, 1);
            }
        }
    }
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
