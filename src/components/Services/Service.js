import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { title,id, img, description, facilities } = props.service
    return (
        <Col lg={4} md={6} sm={12} style={{ marginTop: 10, marginBottom: 10 }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="w-100 h-100" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 100)} <Link to={`/details/${id}`}>see more</Link>
                    </Card.Text>
                    <Link
                        className="btn btn-primary"
                        to={`/details/${id}`}>
                        Details
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;