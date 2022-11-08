import React from 'react';
import image1 from '../../assert/1.png'
import image2 from '../../assert/2.png'
import image3 from '../../assert/3.png'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000} className>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;