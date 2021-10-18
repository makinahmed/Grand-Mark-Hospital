import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faMailBulk, faPhone, faRoad } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <Container style={{ marginTop: 200 }}>
            <hr />
            <Row style={{ textAlign: 'left' }}>
                <Col lg={4} md={6}>
                    <h2 className="text-primary">Grand Mark Hospital</h2>
                    <p>
                        To serve the humanity as a whole with this noble vision the grand mark started its journey . The Grand Mark Hospital agreed upon to provide health care service to the people of the world with affordable cost .
                    </p>
                    <address>
                        <h5>
                            <FontAwesomeIcon icon={faHome} className="me-3 text-primary" />
                            House #48, Road 9/A,DhanMondi,Dhaka</h5>
                        <p>  <FontAwesomeIcon icon={faPhone} className="me-3 text-primary" />
                            Hotline: 10615,999235</p>
                        <p> <FontAwesomeIcon icon={faMailBulk}  className="me-3 text-primary"/>
                            mark.grand@gmail.com</p>
                    </address>

                </Col>
                <Col lg={4} md={6}>
                    <h2 className="text-primary">Other Services</h2>
                    <p>Indoor Service</p>
                    <p>Outdoor Service</p>
                    <p>In-Patient Facilities</p>
                    <p>Rate Charts</p>
                    <p>Vaccination Center</p>
                    <div>
                        <h5>Social Media</h5>
                        <FontAwesomeIcon icon={faFacebook} className="ms-3 text-primary" />
                        <FontAwesomeIcon icon={faTwitter} className="ms-3 text-primary" />
                        <FontAwesomeIcon icon={faInstagram} className="ms-3 text-primary" />

                    </div>
                </Col>
                <Col lg={4} md={6} >
                    <h2 className="text-primary">Contact Us</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control placeholder="Message" as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="btn btn-primary" variant="success">Success</Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;