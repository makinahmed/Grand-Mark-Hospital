import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseInitilizeApp from '../Fireabse/firebase.initilizeapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import useAuth from '../Hooks/useAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Registration = () => {
    const { signUpWithGoogle, createUser, user, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const history = useHistory()
    const location = useLocation()

    const redirect_url = location.state?.from || "/home"
    const handleGoogleSignIn = () => {
        signUpWithGoogle()
            .then((result) => {
             
                const newUser = result.user;
                setUser(newUser);
                history.push(redirect_url);
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUser(email, password);
        history.push(redirect_url)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    console.log(user.displayName)

    return (
        <div style={{ width: 250, textAlign: 'center', marginTop: 200, margin: 'auto' }}>
            <Form
                onSubmit={handleSubmit}
                style={{ marginTop: 200, textAlign: 'left' }}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} required type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Label>Already Registered? <Link to="/login">login</Link></Form.Label>

                <Button variant="primary" className="btn btn-primary" type="submit">
                    Submit
                </Button>

                <div className="text-center">
                    <p className="my-3 text-center">Or</p>
                    <Link to="/" onClick={handleGoogleSignIn} className="btn btn-secondary text-center">
                    <FontAwesomeIcon icon={faGoogle} />  Sign In With Google
                    </Link>
                </div>

            </Form>
        </div>
    );
};

export default Registration;