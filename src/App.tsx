import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { DIGITAL_DESIGN_LATEST_CSS, ENVIRONMENT } from '@/constants';
import RootLayout from '@/page-structure/layouts/RootLayout';
import AuthLayout from '@/page-structure/layouts/AuthLayout';
import { LoginCallback } from '@okta/okta-react';
import { Dashboard } from '@/pages/dashboard/Dashboard';
import { NotFound } from '@/pages/NotFound';
import { Faqs } from '@/pages/Faqs';
import Logout from '@/components/authentication/Logout';
import { LandingPage } from '@/pages/LandingPage';
import ErrorPage from './components/ErrorPage';
import { ContactUs } from './pages/ContactUs';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout />,
            errorElement: (
                <div className='vh-100 d-flex align-items-center justify-content-center'>
                    <ErrorPage />
                </div>
            ),
            children: [
                { path: 'login/callback', element: <LoginCallback /> },
                { path: 'logout', element: <Logout /> },
                {
                    path: 'landing-page',
                    element: <LandingPage />
                },
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        { index: true, element: <Navigate to='/dashboard' /> },
                        {
                            path: 'dashboard',
                            element: <Dashboard />
                        },
                        {
                            path: 'support/faqs',
                            element: <Faqs />
                        },
                        {
                            path: 'support/contact-us',
                            element: <ContactUs />
                        },
                        { path: '*', element: <NotFound /> }
                    ]
                }
            ]
        }
    ],
    {
        // See future flags for react-router v7: https://reactrouter.com/upgrading/v6
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    }
);

function App() {
    useEffect(() => {
        if (ENVIRONMENT === 'prod' || ENVIRONMENT === 'uat') {
            // For uat/prod, no need to reload since it is already loaded via index.html
            return;
        }
        const stylePath = DIGITAL_DESIGN_LATEST_CSS;
        const head = document.head;
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylePath;
        head.append(link);
        return () => {
            link.remove();
        };
    }, []);

    return (
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true
            }}
        />
    );
}

export default App;
