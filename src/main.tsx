import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from '@/store/StoreProvider';
import ToastRenderer from '@/components/ToastRenderer.tsx';

import initMocks from './mocks';

(async () => {
    await initMocks(); // See https://mswjs.io/docs/getting-started

    createRoot(document.getElementById('root')!).render(
        <StoreProvider>
            <App />
            <ToastRenderer />
        </StoreProvider>
    );
})();
