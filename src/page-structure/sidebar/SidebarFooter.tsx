import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/utils/hooks/useTranslation';

const SidebarFooter = () => {
    const translate = useTranslation();

    return (
        <div className='border-top'>
            <div className='p-3'>
                <small className='text-white fw-medium'>{translate('preferredLanguage')}</small>
                <div className='mt-2'>
                    <LanguageSelector />
                </div>
            </div>
        </div>
    );
};
export default SidebarFooter;
