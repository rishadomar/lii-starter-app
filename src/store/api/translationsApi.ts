import { TranslationsData } from '@/types';
import { apiSlice } from './apiSlice';
import { LanguageCode } from 'livingston-npm-components';

export const translationsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        translations: build.query<TranslationsData, { languageCode: LanguageCode }>({
            query: ({ languageCode }) => ({
                url: '/translations',
                params: {
                    application: 'starter-app',
                    language: languageCode
                }
            }),
            providesTags: (_result, _error, { languageCode }) => [{ type: 'Translations' as const, id: languageCode }]
        })
    })
});

export const { useTranslationsQuery } = translationsApi;
