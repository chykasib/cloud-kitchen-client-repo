import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className='container my-5'>
                <Card>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div>
                                <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kYx7RjbvcovEhUjH2kDpwL6EJ3bHLxq87jap6us6plpAPNhaGs2e9amaUb4CVhSEw0A&usqp=CAU' style={{ width: '20rem' }} />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='container'>
                                <Card.Body>
                                    <br />
                                    <br />
                                    <Card.Title>
                                        <h3 className='text-center pt-4'>About Me</h3>
                                    </Card.Title>
                                    <br />
                                    <Card.Text>
                                        <p className='text-center fs-4 px-3 py-4'>
                                            My name is Rock
                                        </p>
                                    </Card.Text>
                                    <br />
                                    <Card.Text>
                                        <p className='text-center'>
                                            I have been running this cloud kitchen since 2017.  I'm a chef, I love to cook. I have been opening this cloud kitchen since 2017.   My primary purpose is to provide healthy food. It is located in GEC, Chittagong.  I do most of the cooking myself and make sure everything is fresh.
                                        </p>
                                    </Card.Text>
                                    <br />
                                    <div className="d-flex ms-5">
                                        <div className='me-5'>
                                            <Image
                                                roundedCircle
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgyEZwCn8v-OY0v44_GPy-0xpZ26vtVopzA&usqp=CAU'
                                                style={{ height: '60px' }}
                                            >
                                            </Image>
                                        </div>
                                        <div className='pt-2'>
                                            <b>Rock Cloud Kitchen</b>
                                        </div>
                                    </div>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    );
};

export default About;