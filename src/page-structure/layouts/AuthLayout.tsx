import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { NavLink, Outlet } from 'react-router-dom';
import { faHouseChimney, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Sidebar, Spinner, useWindowSize } from 'livingston-npm-components';
import Navbar from '@/page-structure/navbar/Navbar';
import { OktaEnabled } from '@/constants';
import SidebarHeader from '@/page-structure/sidebar/SidebarHeader';
import SidebarFooter from '@/page-structure/sidebar/SidebarFooter';
import { useTranslation } from '@/utils/hooks/useTranslation';

export default function AuthLayout() {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const { oktaAuth, authState } = OktaEnabled ? useOktaAuth() : { oktaAuth: null, authState: null };
    const { isDesktop } = useWindowSize();
    const translate = useTranslation();
    const SidebarItems = [
        { id: 'dashboard', icon: faHouseChimney as IconDefinition, label: translate('dashboardTitle'), path: '/dashboard' },
        {
            id: 'support',
            icon: faQuestionCircle as IconDefinition,
            label: translate('supportLabel'),
            path: '/support', // corrected path to lowercase 'support'
            subItems: [
                { id: 'faq', label: translate('faqLabel'), path: '/faqs' }, // updated label to use translation
                { id: 'contact-us', label: translate('contactUsLabel'), path: '/contact-us' } // updated label to use translation
            ]
        }
    ];

    useEffect(() => {
        if (!OktaEnabled) {
            return;
        }

        if (!authState) {
            return;
        }

        if (!authState?.isAuthenticated) {
            const originalUri = toRelativeUrl(window.location.href, window.location.origin);
            oktaAuth.setOriginalUri(originalUri);
            oktaAuth.signInWithRedirect();
        }
    }, [oktaAuth, authState]);

    useEffect(() => {
        setSidebarVisible(isDesktop);
    }, [isDesktop]);

    if (OktaEnabled) {
        if (!authState || !authState?.isAuthenticated) {
            return <Spinner fullScreenLoading />;
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar
                entries={SidebarItems}
                sidebarVisible={sidebarVisible}
                setSidebarVisible={setSidebarVisible}
                sidebarItemSelected={() => {
                    if (!isDesktop) {
                        setSidebarVisible(false);
                    }
                }}
                NavLink={NavLink}
                SidebarHeader={SidebarHeader}
                SidebarFooter={SidebarFooter}
            />
            <div className='d-flex flex-column flex-fill overflow-hidden w-100 vh-100'>
                <Navbar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
                <div data-spy='scroll' data-offset='80' className='main-stage-wrapper h-100 d-flex flex-column flex-fill position-relative'>
                    <div className='d-flex flex-column flex-fill mb-4'>
                        <Outlet />
                    </div>
                </div>
                <div className={!isDesktop && sidebarVisible ? 'overlay' : ''} />
            </div>
        </div>
    );
}
