import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/');
    }

    return (
        <div className="register container py-5">
            <div className="form w-50 mx-auto bg-light p-4 rounded shadow my-5">
                <h2 className="text-center mb-4">Register to your account.</h2>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                            ref={nameRef}
                            type="text"
                            placeholder="Enter name" 
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <p className="mt-3">
                    Already have an account?{' '}
                    <Link
                        className="text-decoration-none text-primary"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
