import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-black.png';

const Header = () => {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    return (
        <>
            <Navbar
                sticky="top"
                className="shadow"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="Site logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user ? (
                                <Button onClick={() => signOut(auth)}>
                                    Sing Out
                                </Button>
                            ) : (
                                <Button onClick={() => navigate('login')}>
                                    Login
                                </Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
