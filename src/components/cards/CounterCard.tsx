import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

type CounterCardProps = {
    title?: string;
    status?: string;
    count?: number;
    dangerText?: boolean;
    button?: ButtonProps;
    className?: string;
};

const CounterCard = ({ title, status, count, dangerText = false, button, className }: CounterCardProps) => {
    return (
        <Card className={`h-100 ${className ?? ''}`}>
            <Card.Body>
                <small className='text-uppercase text-lii-text-light fw-bold'>{title}</small>
                <h5 className={`${dangerText ? 'text-danger-dark' : ''} mb-0`}>{status}</h5>
                <h1 className={`${dangerText ? 'text-danger-dark' : ''} display-3 mb-0`}>{count}</h1>
            </Card.Body>
            {button && (
                <Card.Footer>
                    <Button variant='secondary' onClick={() => button.onClick && button.onClick()}>
                        {button.label}
                    </Button>
                </Card.Footer>
            )}
        </Card>
    );
};
export default CounterCard;
