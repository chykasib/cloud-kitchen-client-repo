import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';
import useTitle from '../../Hooks/UseTitle';
const Services = () => {
    const allServices = useLoaderData()
    useTitle('Services')
    return (
        <div className='container my-5'>
            <>
                <Row lg={1} sm={1} className="g-4">
                    {
                        allServices.map(allService => <Service key={allService._id} allService={allService}></Service>)
                    }
                </Row>
            </>
        </div>

    );
};

export default Services;