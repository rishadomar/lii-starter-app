import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type HeaderProps = {
    title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
    <div className='d-flex justify-content-between align-items-center py-4'>
        <div className='d-flex align-items-center'>
            <span className='badge badge-circular badge-info me-3'>
                <FontAwesomeIcon icon={faHouseChimney as IconDefinition} />
            </span>
            <h1 className='mb-0'>{title}</h1>
        </div>
    </div>
);
