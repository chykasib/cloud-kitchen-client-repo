import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const addService = () => toast("service is added successfully");
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.productName.value
        const price = form.price.value
        const img = form.img.value
        const details = form.details.value;
        const service = {
            name: name,
            price: price,
            img: img,
            email: user?.email,
            details: details

        }
        console.log(service)
        fetch('https://cloud-kitchen-server-iota.vercel.app/AllServices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset('')
                }
            })
            .catch(error => console.error(error))
    }
    useTitle('Add Services')
    return (

        <Card className='container m-5 '>
            <Form onSubmit={handleSubmit} className='text-center'>
                <Form.Group className="m-3" controlId="formBasicName">
                    <Form.Control type="text" name='productName' placeholder="Enter Product Name" required />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPrice">
                    <Form.Control type="text" name='price' placeholder='Price' required />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicImg">
                    <Form.Control type="img" name='img' placeholder='Service Image' required />
                </Form.Group>
                <Form.Group className="m-3 ps-3 pt-3 fs-5" controlId="text">
                    <Form.Control as="textarea"
                        required
                        name='details'
                        type="text"
                        placeholder='Details'
                    />
                </Form.Group>
                <Button onClick={addService} className='w-100 my-4' variant="primary" type="submit">
                    Add Service
                </Button>
                <ToastContainer />
            </Form>
        </Card>

    );
};

export default AddService;