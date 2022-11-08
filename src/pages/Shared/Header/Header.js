import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
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
                        <Link to={'/login'}><Button variant="warning">Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;