import { useTranslationsQuery } from '@/store/api/translationsApi';
import { useAppSelector } from '@/store/hooks';

interface UseTranslationOptions {
    substitutions?: (string | number)[];
}

export const useTranslation = () => {
    const { selectedLanguageCode } = useAppSelector((state) => state.language);
    const { data } = useTranslationsQuery({ languageCode: selectedLanguageCode });

    const translate = (key: string, options: UseTranslationOptions = {}) => {
        const { substitutions = [] } = options;

        try {
            if (!data || (selectedLanguageCode !== 'en' && selectedLanguageCode !== 'fr')) {
                return key;
            }

            // Get the translations for the selected language
            const languageTranslations = data[selectedLanguageCode][key];
            if (!languageTranslations) {
                console.warn(`No translations found for language: ${selectedLanguageCode}`);
                return `Missing language: [${key}]`;
            }

            // Get the specific translation for the key
            const translatedPhrase = data[selectedLanguageCode][key];
            if (!translatedPhrase) {
                console.warn(`No translation found for key: ${key}`);
                return `Untranslated: [${key}]`;
            }

            // If we have substitutions, replace the placeholders
            if (substitutions.length > 0) {
                return translatedPhrase.trim().replace(/{(\d+)}/g, (match, index) => substitutions[index]?.toString() || match);
            }

            // Return the trimmed translation
            return translatedPhrase.trim();
        } catch (error) {
            console.error('Translation error:', error);
            return `Error: [${key}]`;
        }
    };

    return translate;
};
