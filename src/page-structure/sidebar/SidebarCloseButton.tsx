import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type ComponentProps = {
    onClick: () => void;
};

const SidebarCloseButton = ({ onClick }: ComponentProps) => {
    return (
        <Button variant='secondary' size='lg' className='sidebar-close-button-mobile' onClick={onClick}>
            <FontAwesomeIcon icon={faTimes as IconDefinition} />
        </Button>
    );
};

export default SidebarCloseButton;
