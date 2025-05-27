import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecentClearancesCard from '@/components/cards/RecentClearancesCard/RecentClearancesCard';
import { SpringboardCards } from './SpringboardCards';
import { CallToAction } from './CallToAction';
import { Header } from './Header';
import { CounterCards } from './CounterCards';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const Dashboard = () => {
    const translate = useTranslation();

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Header title={translate('dashboardTitle')} />
                </Col>
            </Row>
            <Row>
                <CounterCards />
            </Row>
            <Row>
                <Col>
                    <Container fluid className='p-0'>
                        <Row className='row-cols-1 row-cols-xl-2'>
                            <Col className='col-xl-8 d-flex mb-4 mb-xl-0'>
                                <RecentClearancesCard />
                            </Col>
                            <Col className='col-xl-4'>
                                <SpringboardCards />
                                <CallToAction />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
