import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type NotificationsButtonProps = {
    className?: string;
};

const NotificationsButton = ({ className = '' }: NotificationsButtonProps) => {
    return (
        <Button
            variant='secondary'
            className={`${className} rounded-circle position-relative mx-1`}
            style={{ width: '40px', height: '40px' }}
        >
            <FontAwesomeIcon icon={faBell as IconDefinition} />
            <div className='alert-badge top-0'>2</div>
        </Button>
    );
};

export default NotificationsButton;
