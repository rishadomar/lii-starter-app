import { faBars, faCreditCard, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import NavbarProfileDropdown, { NavbarProfileDropDownItem } from './NavbarProfileDropdown';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WaffleMenuDropdown from './WaffleMenuDropdown';
import NotificationsButton from './NotificationsButton';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type NavbarProps = {
    sidebarVisible: boolean;
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ sidebarVisible, setSidebarVisible }: NavbarProps): JSX.Element {
    const dropdownEntries: NavbarProfileDropDownItem[] = [
        {
            icon: faUserCircle as IconDefinition,
            title: 'Profile',
            link: '#/action-1'
        },
        {
            icon: faCreditCard as IconDefinition,
            title: 'Billing',
            link: '#/action-2'
        }
    ];

    return (
        <nav className='navbar bg-white border-bottom'>
            <div className='container-fluid'>
                <div className='row flex-fill'>
                    <div className='col'>
                        <div className='d-flex align-items-center justify-content-between py-2'>
                            <Button variant='ghost' onClick={() => setSidebarVisible(!sidebarVisible)}>
                                <FontAwesomeIcon icon={faBars as IconDefinition} />
                            </Button>
                            <div className='d-flex align-items-center'>
                                <NotificationsButton className='mx-1' />
                                <WaffleMenuDropdown className='mx-1' />
                                <NavbarProfileDropdown companyName='ABC company' email='john@abccompany.com' entries={dropdownEntries} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
