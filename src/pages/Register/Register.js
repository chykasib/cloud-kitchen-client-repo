import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
import { setAuthToken } from '../../api/Auth';

const Register = () => {
    const { createUser, googleSingIn, githubLogin, updateUserProfile } = useContext(AuthContext)
    useTitle('Register')
    const registerHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user)
                form.reset('');
                updateUserProfileHandler(name, photoURL)
                console.log(user);
            })
            .catch(error => console.error(error));

    }
    const updateUserProfileHandler = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const googleSignInHandler = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                setAuthToken(user)
            })
            .catch(error => console.error(error))
    }
    const githubSignInHandler = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <Card className='container w-50 my-5'>
            <Form onSubmit={registerHandler} className='my-2 mx-3 p-3'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoURL" name='photoURL' placeholder="Enter Your photoURL" />
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
                <Button onClick={googleSignInHandler} className='my-3 me-4' variant="success"><FaGoogle className='me-2'></FaGoogle> Google</Button>
                <Button onClick={githubSignInHandler} variant="dark"><FaGithub className='me-2'></FaGithub> Github</Button>
                <hr /><p>Already have an account?</p><hr />
                <Link to={'/login'}><Button variant="link">Please! Login</Button></Link>
            </Form>
        </Card>
    );
};

export default Register;