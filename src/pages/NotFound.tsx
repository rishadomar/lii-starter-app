import { PageNotFoundImage } from '@/assets/images/PageNotFoundImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const NotFound = () => {
    const translate = useTranslation();

    const renderLink = (text: string, link: string) => {
        return <a href={link}>{text}</a>;
    };

    return (
        <div className='d-flex flex-column justify-content-center flex-fill h-100'>
            <Container fluid>
                <Row>
                    <Col className='text-center'>
                        <div className='error-image w-150px w-md-225px m-auto'>
                            <PageNotFoundImage />
                        </div>
                        <h1 className='mb-3'>{translate('pageNotFoundTitle')}</h1>
                        <p>
                            {translate('pageNotFoundDescription')} {renderLink(translate('dashboardTitle'), '/dashboard')}
                        </p>
                        {/* <p>{translate('pageNotFoundDescription', { substitutions: [translate('dashboardTitle')] })}</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
