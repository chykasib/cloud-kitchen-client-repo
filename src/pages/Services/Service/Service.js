import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const Service = ({ allService }) => {
    const { name, img, price, details } = allService;
    return (
        <div>
            {
                Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Title>Price: {price}</Card.Title>
                                <Card.Text>
                                    {details.slice(0, 100)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </div>
    );
};

export default Service;