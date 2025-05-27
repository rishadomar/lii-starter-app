import SidebarCloseButton from './SidebarCloseButton';
import { LivingstonLogo } from '@/assets/images/LivingstonLogo';

type SidebarHeaderProps = {
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarHeader = ({ setSidebarVisible }: SidebarHeaderProps) => {
    return (
        <section className='sidebar-header border-bottom'>
            <div className='brand-color-strip lii-portal-accent'></div>
            <div className='d-flex justify-content-between align-items-center p-3 '>
                <div className='w-60'>
                    <LivingstonLogo />
                </div>
                <SidebarCloseButton onClick={() => setSidebarVisible(false)} />
            </div>
        </section>
    );
};

export default SidebarHeader;
