import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavigationBar = () => {
    const { user, setUser, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Grand Mark Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/mission">Mission And Vision</Nav.Link>
                            <Nav.Link as={Link} to="/registration">Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/registration">   {user.email ? <div>
                                <Link
                                    onClick={logOut}
                                    className="d-inline me-3 btn btn-secondary" to="/registration" >Log Out</Link>
                                <h5 className="d-inline me-3">{user.displayName}</h5>
                                <img style={{ width: 25 }}
                                    className="rounded-circle"
                                    src={user.email && user.photoURL} alt="" />

                            </div> : ""
                            }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;