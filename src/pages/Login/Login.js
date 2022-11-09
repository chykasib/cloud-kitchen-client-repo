import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { signInByEmailAndPassword, googleSingIn, githubLogin } = useContext(AuthContext)
    useTitle('Login')
    const loginHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInByEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                form.reset('');
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => console.error(error));

    }

    const googleSignInHandler = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                console.log(user)
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
            <Form onSubmit={loginHandler} className='my-2 mx-3 p-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button className='w-100' variant="warning" type="submit">
                    Login
                </Button>
                <Button onClick={googleSignInHandler} className='my-3 me-4' variant="success"><FaGoogle className='me-2'></FaGoogle> Google</Button>
                <Button onClick={githubSignInHandler} variant="dark"><FaGithub className='me-2'></FaGithub> Github</Button>
                <hr /><p>New to Here?</p><hr />
                <Link to={'/register'}><Button variant="link"> Create your account</Button></Link>
            </Form>
        </Card>
    );
};

export default Login;