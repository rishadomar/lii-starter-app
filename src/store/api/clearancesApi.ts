import { Clearance } from '@/types';
import { apiSlice } from './apiSlice';

export const clearancesApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        clearances: build.query<Clearance[], void>({
            query: () => ({
                url: '/list/clearances',
                method: 'GET'
            }),
            providesTags: (_result, _error) => [{ type: 'Clearances' as const, id: 'LIST' }]
        })
    })
});

export const { useLazyClearancesQuery } = clearancesApi;
