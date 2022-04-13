import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/');
    }

    return (
        <div className="login container py-5">
            <div className="form w-50 mx-auto bg-light p-4 rounded shadow my-5">
                <h2 className="text-center mb-4">Login to your account.</h2>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className="mt-3">
                    Don't have an account?{' '}
                    <Link
                        className="text-decoration-none text-primary"
                        to="/register"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
