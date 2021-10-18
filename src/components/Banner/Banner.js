import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../../images/img-1.jpg';
import Img2 from '../../images/img-2.jpg';
import Img3 from '../../images/img-3.jpg';
import Img4 from '../../images/img-4.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '100vh' }}
                    src={Img4}
                    alt="Third slide"

                />

                <Carousel.Caption>
                    <h3>World class modern Machines</h3>
                    <p>Any kind of modern solution we provides</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '100vh' }}
                    src={Img1}
                    alt="First slide"


                />
                <Carousel.Caption>
                    <h3>Surgery</h3>
                    <p>Surgery With a world famous doctors</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '100vh' }}
                    src={Img2}
                    alt="Second slide"

                />

                <Carousel.Caption>
                    <h3>24 Hours Services</h3>
                    <p>Always we are with you for care</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;