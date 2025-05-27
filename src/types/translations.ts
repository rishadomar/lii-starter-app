interface TranslationLabel {
    [key: string]: string; // e.g., "EnterEmailAddress_Label": "Enter your email address"
}

export interface TranslationsData {
    en: TranslationLabel;
    fr: TranslationLabel;
    es: TranslationLabel;
}
