// src/mocks/handlers.ts
import { http } from 'msw';
import { getTranslations } from './translationsMockHandler';
import { getClearances } from './clearancesMockHandler';
import { API_BASE_URL } from '@/constants';

export const handlers = [
    http.get(`${API_BASE_URL}/translations`, getTranslations),
    http.get(`${API_BASE_URL}/list/clearances`, getClearances)
];
