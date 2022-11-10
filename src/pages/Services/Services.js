import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const allServices = useLoaderData()
    console.log(allServices)
    return (
        <div className='container my-5'>
            <>
                <Row xs={1} md={3} className="g-4">
                    {
                        allServices.map(allService => <Service key={allService._id} allService={allService}></Service>)
                    }
                </Row>
            </>
        </div>

    );
};

export default Services;