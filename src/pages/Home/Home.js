import React from 'react';
import Slider from '../Slider/Slider';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import MainItems from './MainItems/MainItems';
import { Button } from 'react-bootstrap';
const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <section className='my-5 container'>
                <Slider></Slider>
            </section>
            <section className='container my-5'>
                <div className="mb-4">
                    <h1>My Services</h1>
                </div>

                <>
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(mainService => <MainItems key={mainService._id} mainService={mainService}></MainItems>)
                        }
                    </Row>
                </>

                <div className="my-5">
                    <Link to={'/services'}><Button className='text-light py-2 px-5 fs-5' variant="success">
                        See All
                    </Button></Link>
                </div>
            </section>


        </div>
    );
};

export default Home;