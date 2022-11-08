import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    useTitle('Register')
    const registerHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('');
                console.log(user);
            })
            .catch(error => console.error(error));

    }
    return (
        <Card className='container w-50 my-5'>
            <Form onSubmit={registerHandler} className='my-2 mx-3 p-3'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button className='w-100' variant="warning" type="submit">
                    Register
                </Button>
                <hr /><p>Already have an account?</p><hr />
                <Link to={'/login'}><Button variant="link">Please! Login</Button></Link>
            </Form>
        </Card>
    );
};

export default Register;