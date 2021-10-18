import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <Container style={{textAlign: 'center'}}>
            <h2 className="my-5 text-primary">Services</h2>
            <Row className="mx-auto">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                
                ></Service>)
            }
            </Row>
           
        </Container>
    );
};

export default Services;