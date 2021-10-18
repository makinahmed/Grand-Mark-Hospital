import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Equipment1 from '../../images/equipment-1.jpg';
import Equipment2 from '../../images/equipment-2.jpg';
import Equipment3 from '../../images/equipment-3.jpg';
import Equipment4 from '../../images/equipment-4.jpg';
import Equipment5 from '../../images/equipment-5.jpg';
import Equipment6 from '../../images/equipment-6.jpg';
import Equipment7 from '../../images/equipment-7.jpg';
import Equipment8 from '../../images/equipment-8.jpg';
import Equipment9 from '../../images/equipment-9.jpg';
import Equipment10 from '../../images/equipment-10.jpg';
import Equipment11 from '../../images/equipment-11.jpg';
import Equipment12 from '../../images/equipment-12.jpg';
import Equipment13 from '../../images/equipment-13.jpg';
import Equipment14 from '../../images/equipment-14.jpg';
import Equipment15 from '../../images/equipment-15.jpg';
const Gallery = () => {
    return (
        <div>
            <Container style={{marginTop: 200}}>
                <h2 className="my-5 text-primary">Gallery</h2>
                <Row row-gap={3}>
                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment1} alt="" className="w-100" />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment2} alt="" className="w-100 h-100" />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment3} alt="" className="w-100 h-100 " />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment6} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment7} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment8} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment9} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment10} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment11} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment11} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment12} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment13} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment14} alt="" className="w-100 h-100" />
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment15} alt="" className="w-100 h-100" />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment10} alt="" className="w-100 h-100" />
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={Equipment10} alt="" className="w-100 h-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;