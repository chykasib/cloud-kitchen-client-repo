import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const MainItems = ({ mainService }) => {
    const { name, img, price, details, _id } = mainService;
    return (

        <div >
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
                                <Link to={`serviceDetails/${_id}`}><Button variant="primary">view details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </div>

    );
};

export default MainItems;