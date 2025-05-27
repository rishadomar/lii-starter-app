import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Faq } from './Faq';

export const Faqs = () => {
    return (
        <Container className='mt-4'>
            <Accordion>
                <Card>
                    <Card.Header>
                        <h5 className='text-lii-text-light'>Frequently Asked Questions</h5>
                    </Card.Header>
                    <Faq question={1} />
                    <Faq question={2} />
                    <Faq question={3} />
                </Card>
            </Accordion>
        </Container>
    );
};
