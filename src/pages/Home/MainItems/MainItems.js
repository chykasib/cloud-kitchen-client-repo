import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../../Context/AuthProvider';
const MainItems = ({ mainService }) => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner animation="border" />;
    }
    const { name, img, price, details, _id } = mainService;
    return (

        <div >
            {
                Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                                </PhotoView>
                            </PhotoProvider>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Title>Price: {price}</Card.Title>
                                <Card.Text>
                                    <p className='text-center'>{details.slice(0, 100)}</p>
                                </Card.Text>
                                <Link to={`serviceDetails/${_id}`}><Button variant="primary">Show Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </div>

    );
};

export default MainItems;