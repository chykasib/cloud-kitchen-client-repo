import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReviewSection from '../ReviewSection/ReviewSection';
const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, img, price, details, _id } = service;
    console.log(service)
    return (
        <div>
            <section>
                <h1 className='mt-5'>My Service</h1>
                <div className='container my-5'>
                    <Card>
                        <div className="d-flex">
                            <div>
                                <Card.Img variant="top" src={img} style={{ width: '30rem', height: '25rem' }} />
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title><h3 className='mt-3 py-3 px-4 text-start'>{name}</h3></Card.Title>
                                    <Card.Text>
                                        <p className='text-start px-4' > <b>price</b> : ${price}</p>
                                    </Card.Text>
                                    <p className='text-start py-3 px-4'>{details}</p>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
            <section>
                <h1 className='pb-4'>Reviews</h1>
                <div>
                    <ReviewSection id={_id} name={name}></ReviewSection>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;