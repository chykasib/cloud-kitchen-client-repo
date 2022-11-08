import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const singOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className='py-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >Rock Cloud Kitchen</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'}><Button variant="warning">Home</Button></Link>
                    </Nav>
                    <Nav>
                        {
                            user?.email ? <Link><Button onClick={singOutHandler} variant="light">Sing Out</Button></Link> : <Link to={'/login'}><Button className='ms-3' variant="warning">Login</Button></Link>
                        }
                    </Nav>
                    <Nav>
                        <Link className='ms-3' to={'/blog'}><Button variant="info">Blog</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;