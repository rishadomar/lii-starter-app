import { ButtonType, LanguageType, LanguageSelector as NPMLanguageSelector } from 'livingston-npm-components';
import { AVAILABLE_LANGUAGES } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectSelectedLanguageCode, setLanguageCode } from '@/store/reducers/languageSlice';

export const LanguageSelector = () => {
    const dispatch = useAppDispatch();
    const s = useAppSelector(selectSelectedLanguageCode);
    return (
        <NPMLanguageSelector
            languages={AVAILABLE_LANGUAGES}
            selectedLanguage={AVAILABLE_LANGUAGES.find((language) => language.code === s)}
            setLanguage={(selectedLanguageType: LanguageType) => {
                dispatch(setLanguageCode(selectedLanguageType.code));
            }}
            dropDownButton={{
                type: ButtonType.SecondaryWhite,
                width: 'full'
            }}
        />
    );
};
