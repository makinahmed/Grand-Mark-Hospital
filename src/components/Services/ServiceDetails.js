import React, { useEffect, useState } from 'react';
import { Card, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [product, setProduct] = useState([]);
    const { detailsId } = useParams();

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data.find(p => p.id === Number.parseInt(detailsId)))
            })
    }, [detailsId]);
    return (
        <div style={{ marginTop: 150 }}>
            <h2 style={{ marginBottom: 50 }}>Service ID :  {detailsId}</h2>
            <div className="mb-5">
                <img src={product.img} alt="" />
            </div>
            <div style={{ width: 300, margin: 'auto' }}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Facilities: </h3>
                <ul style={{ textAlign: 'left' }}>
                    {
                        product.facilities && product.facilities.map(a => <li>{a}</li>
                        )
                    }
                </ul>
            </div>

        </div>
    );
};

export default ServiceDetails;