import { faCheckCircle, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useAppSelector } from '@/store/hooks';
import { ToastItemEntry } from '@/store/reducers/toastSlice';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useAppDispatch } from '@/store/hooks';
import { removeToast } from '@/store/reducers/toastSlice';

const ToastDisplaySeconds = 10;
const ToastContainerPosition = 'top-center';

const ToastRenderer = () => {
    const dispatch = useAppDispatch();
    const toastItems = useAppSelector((state) => state.toast.entries);

    const getIcon = (toast: ToastItemEntry): IconDefinition => {
        switch (toast.category) {
            case 'danger':
                return faTimesCircle as IconDefinition;

            case 'success':
                return faCheckCircle as IconDefinition;

            case 'warning':
                return faExclamationCircle as IconDefinition;

            default:
                return faExclamationCircle as IconDefinition;
        }
    };

    return (
        <ToastContainer position={ToastContainerPosition} className='mt-2'>
            {toastItems.map((item) => (
                <Toast
                    key={item.id}
                    className={item.category}
                    onClose={() => dispatch(removeToast(item.id!))}
                    show={true}
                    animation
                    delay={ToastDisplaySeconds * 1000}
                    autohide
                >
                    <Toast.Body>
                        <div className='toast-icon'>
                            <FontAwesomeIcon icon={getIcon(item)} />
                        </div>
                        <div className='toast-text'>{item.message}</div>
                    </Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
};

export default ToastRenderer;
