import Col from 'react-bootstrap/Col';
import CounterCard from '@/components/cards/CounterCard';
import { addToast } from '@/store/reducers/toastSlice';
import { useAppDispatch } from '@/store/hooks';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const CounterCards = () => {
    const translate = useTranslation();
    const dispatch = useAppDispatch();
    const onHoldCount = 8;

    return (
        <>
            {onHoldCount > 0 && (
                <Col className='col-12 col-md-4 mb-4'>
                    <CounterCard
                        title={translate('counterCardTitle')}
                        status={translate('statusOnHold')}
                        count={8}
                        dangerText
                        button={{
                            label: translate('counterCardOHoldButton'),
                            onClick: () => alert('Button clicked')
                        }}
                    />
                </Col>
            )}
            <Col className={`col-12 col-md-${onHoldCount > 0 ? '4' : '6'} mb-4`}>
                <CounterCard
                    title={translate('counterCardTitle')}
                    status={translate('statusCompleted')}
                    count={128}
                    button={{
                        label: translate('counterCardCompletedButton'),
                        onClick: () =>
                            dispatch(
                                addToast({
                                    title: translate('toastTitle'),
                                    message: translate('toastDescription', { substitutions: ['document', 'created'] }),
                                    category: 'success'
                                })
                            )
                    }}
                />
            </Col>
            <Col className={`col-12 col-md-${onHoldCount > 0 ? '4' : '6'} mb-4`}>
                <CounterCard
                    title={translate('counterCardTitle')}
                    status={translate('statusInProgress')}
                    count={26}
                    button={{
                        label: translate('counterCardIProgressButton'),
                        onClick: () => alert('Button clicked')
                    }}
                />
            </Col>
        </>
    );
};
