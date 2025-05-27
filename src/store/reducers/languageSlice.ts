import { AVAILABLE_LANGUAGES } from '@/constants';
import * as localStorageUtils from '@/utils/localstorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { LanguageCode } from 'livingston-npm-components';

const initialState: { selectedLanguageCode: LanguageCode } = {
    selectedLanguageCode: localStorageUtils.getSelectedLanguageCode()
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageCode: (state, action: PayloadAction<LanguageCode>) => {
            state.selectedLanguageCode = action.payload;
            const f = AVAILABLE_LANGUAGES.find((language) => language.code === action.payload);
            if (f) {
                localStorageUtils.setSelectedLanguageCode(f.code);
            }
        }
    }
});

export const { setLanguageCode } = languageSlice.actions;
export const selectSelectedLanguageCode = (state: RootState) => state.language.selectedLanguageCode;
export default languageSlice.reducer;
