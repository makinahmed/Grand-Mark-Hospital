import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseInitilizeApp from '../Fireabse/firebase.initilizeapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useAuth from '../Hooks/useAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';


const Registration = () => {
    const { signUpWithGoogle, user, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setIsSubmit] = useState(true);
    const [suggestion, setSuggestion] = useState("");
    const [error, setError] = useState('')

    const auth = getAuth();
    const history = useHistory()
    const location = useLocation()

    const redirect_url = location.state?.from || "/home"
    const handleGoogleSignIn = () => {
        signUpWithGoogle()
            .then((result) => {
                const newUser = result.user;
                console.log(newUser);
                setUser(newUser);
                history.push(redirect_url);
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((a) => {
                const user = a.user;
                setUser(user);
                history.push(redirect_url)
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    setIsSubmit(!isSubmit);
                    setError("This email is already taken!");
                }
            })

    }


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        if (regex.test(e.target.value)) {
            setPassword(e.target.value)
            setIsSubmit(!isSubmit)
        }

    }

    const handleFocus = e => {
        setSuggestion("(at least one uppercase, one lowercase, one character,one special character,one digit,and length should be min 8)")
    }
    return (
        <div style={{ width: 300, textAlign: 'center', margin: 'auto' }}>
            <Form
                className="border-1 border py-3 px-3 shadow rounded"
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
                    <Form.Label className="text-danger">{error}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onFocus={handleFocus} onBlur={handlePassword} type="password" placeholder="Password" />
                    <Form.Label>{suggestion}</Form.Label>
                </Form.Group>
                <Button variant="primary"
                    disabled={isSubmit}
                    className="btn btn-primary w-100 mb-2" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Label>Already Registered? <Link to="/login">login</Link></Form.Label>
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