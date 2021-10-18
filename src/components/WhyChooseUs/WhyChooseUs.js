import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import PopularHospital from '../../images/popularHostpital.jpg'
const WhyChooseUs = () => {
    return (
        <Container>
            <h2 className="my-5 text-primary">Why Choose Us?</h2>
            <Row>
                <Col lg={6} sm={12}>
                    <img className="w-100" src={PopularHospital} alt="" />
                </Col>
                <Col lg={6} sm={12}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>More Experience</Accordion.Header>
                            <Accordion.Body>
                            In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently meet.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>The Right Answers</Accordion.Header>
                            <Accordion.Body>
                            Grand Mark  Hospital aims to provide unparalleled service to the people of Bangladesh by delivering the highest possible level of care.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Seamless Care</Accordion.Header>
                            <Accordion.Body>
                            The outpatient services are open daily, except Friday, in a convenient morning, afternoon and late evening hours. Other than that our ER (Emergency dept) is fully operational 24/7 round the year.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Unparalleled Expertise</Accordion.Header>
                            <Accordion.Body>
                            Medical services will be provided as both outpatient and inpatient services as well as an Ambulance service.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>24 Ours Service</Accordion.Header>
                            <Accordion.Body>
                            Medical services will be provided you any service and help depends on your ability.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyChooseUs;