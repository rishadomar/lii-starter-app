import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import { Outlet, useNavigate } from 'react-router-dom';
import oktaConfig from '@/oktaConfig';
import { OktaEnabled } from '@/constants';
import { useTranslationsQuery } from '@/store/api/translationsApi';
import { getSelectedLanguageCode } from '@/utils/localstorage';
import { OverlaySpinner } from '@/components/OverlaySpinner';
import ErrorPage from '@/components/ErrorPage';

const oktaAuth = OktaEnabled ? new OktaAuth(oktaConfig.oidc) : null;

export default function RootLayout() {
    const navigate = useNavigate();
    const languageCode = getSelectedLanguageCode();
    const { error, isLoading: isBusyLoadingTranslations } = useTranslationsQuery({ languageCode });

    if (isBusyLoadingTranslations) {
        return <OverlaySpinner />;
    }

    if (error) {
        return (
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <ErrorPage />
            </div>
        );
    }

    const restoreOriginalUri = (_oktaAuth: OktaAuth, originalUri: string) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    if (!OktaEnabled) {
        return <Outlet />;
    }
    return (
        <Security oktaAuth={oktaAuth!} restoreOriginalUri={restoreOriginalUri}>
            <Outlet />
        </Security>
    );
}
