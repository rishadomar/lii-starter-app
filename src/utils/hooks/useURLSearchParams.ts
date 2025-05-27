export const useURLSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const getParam = (param: string): string | null => {
        return searchParams.get(param);
    };

    return { getParam };
};
