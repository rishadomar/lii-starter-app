const initMocks = async () => {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') {
        console.log('🔶 Mock API enabled');
        const { worker } = await import('./browser');
        // Start the worker
        await worker.start({
            // Show more realistic behavior in the browser's Network tab
            serviceWorker: {
                url: '/mockServiceWorker.js'
            },
            // Don't log all requests to console
            quiet: true,
            // By default, capture all requests that match one of our mock handlers
            // but pass through any other requests to real APIs
            onUnhandledRequest: 'bypass'
        });
    }
};

export default initMocks;
