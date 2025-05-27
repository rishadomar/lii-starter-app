import { LanguageType } from 'livingston-npm-components';

export const OktaEnabled = import.meta.env.VITE_OKTA_ENABLED && import.meta.env.VITE_OKTA_ENABLED === 'true' ? true : false;

console.log('Okta enabled:', OktaEnabled);
console.log('Env Okta enabled: [' + import.meta.env.VITE_OKTA_CLIENT_ID + ']');

type EnvironmentTypes = 'dev' | 'uat' | 'prod';
export const ENVIRONMENT: EnvironmentTypes = 'dev';
export const DIGITAL_DESIGN_LATEST_CSS = 'https://dds-react-wiki-dev.livingston.com/static/main-v3.css';
export const DIGITAL_DESIGN_ASSETS = 'https://dds-react-wiki-dev.livingston.com';

// Define your API base URL - this should match what you use in your actual API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const LOCALSTORAGE_LANGUAGE_CODE_KEY = 'languageCode';
export const AVAILABLE_LANGUAGES: LanguageType[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' }
];
