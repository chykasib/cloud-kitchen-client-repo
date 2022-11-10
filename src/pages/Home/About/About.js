import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className='container my-5'>
                <Card>
                    <div className="d-flex">
                        <div>
                            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kYx7RjbvcovEhUjH2kDpwL6EJ3bHLxq87jap6us6plpAPNhaGs2e9amaUb4CVhSEw0A&usqp=CAU' style={{ width: '30rem' }} />
                        </div>
                        <div>
                            <Card.Body>
                                <Card.Title>
                                    <h1 className='text-center mt-4'>About Me</h1>
                                </Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default About;