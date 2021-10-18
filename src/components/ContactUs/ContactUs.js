import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Hospital from '../../images/hospital.jpg';
const ContactUs = () => {
    return (
        <Container style={{ marginTop: 100 }}>
            <div>
                <img src={Hospital} className="my-5" alt="" />
            </div>
            <Row style={{ textAlign: 'left' }}>
                <Col lg={6} sm={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name*</Form.Label>
                            <Form.Control type="name" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" className="btn btn-primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg={6} sm={12}>
                    <h3 className="text-primary">Get in Touch</h3>
                    <p>Grand Mark  has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards. Grand Mark started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Popular became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.</p>


                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;