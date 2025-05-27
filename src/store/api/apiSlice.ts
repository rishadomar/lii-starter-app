import { SerializedError } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@/constants';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    tagTypes: ['Translations', 'Users', 'Clearances'],
    endpoints: () => ({})
});

// Type guard for FetchBaseQueryError
function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === 'object' && error != null && 'status' in error;
}

// Type guard for SerializedError
function isSerializedError(error: unknown): error is SerializedError {
    return typeof error === 'object' && error != null && 'message' in error;
}

function isError(error: unknown): error is Error {
    return error instanceof Error;
}

export const extractErrorMessage = (error: FetchBaseQueryError | SerializedError) => {
    console.log('Error from somewhere:', error);

    // Handle Error instances
    if (isError(error)) {
        return error.message;
    }

    // Handle FetchBaseQueryError
    if (isFetchBaseQueryError(error)) {
        if ('status' in error) {
            if (error.status === 404) {
                return 'Resource not found';
            }
            if (typeof error.data === 'object' && error.data && 'message' in error.data) {
                return (error.data as { message: string }).message;
            }

            // Fallback for other status codes
            return `API request failed with status ${error.status}`;
        }
    }

    // Handle SerializedError
    if (isSerializedError(error)) {
        return error.message || 'Serialized error occurred';
    }

    return 'An unexpected error occurred';
};
