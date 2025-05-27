import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SpringboardCardProps = {
    icon?: IconDefinition;
    title?: string;
    description?: string;
    onClick?: () => void;
    className?: string;
};

const SpringboardCard = ({ icon, title, description, onClick, className = '' }: SpringboardCardProps) => {
    return (
        <div className={`card cursor-pointer ${className}`} onClick={() => onClick && onClick()}>
            <div className='card-body d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    {icon && (
                        <span className='badge badge-circular badge-circular-lg badge-info me-3'>
                            <FontAwesomeIcon icon={icon} />
                        </span>
                    )}
                    <div>
                        {title && <h5 className='mb-0'>{title}</h5>}
                        {description && <div>{description}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpringboardCard;
