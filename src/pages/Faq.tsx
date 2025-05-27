import Accordion from 'react-bootstrap/Accordion';

type FaqProps = {
    question: number;
};

export const Faq = ({ question }: FaqProps) => (
    <Accordion.Item eventKey={question.toString()}>
        <Accordion.Header>
            <div className='fw-bold'>Question {question}</div>
        </Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus justo. Aliquam sit amet nibh vel libero tincidunt
            suscipit ac ut urna. Quisque iaculis nisi quis turpis accumsan dignissim.
        </Accordion.Body>
    </Accordion.Item>
);
