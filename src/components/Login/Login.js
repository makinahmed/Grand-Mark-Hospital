import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { user, setUser } = useAuth();
    const auth = getAuth();

    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || "/home"

    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((a) => {
                const user = a.user;
                setUser(user)
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError("Please type valid email & password");
            });

    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    console.log(user)
    return (
        <div style={{ width: 250, textAlign: 'center', marginTop: 200, margin: 'auto' }}>
            <Form
                onSubmit={handleSubmit}
                style={{ marginTop: 200, textAlign: 'left' }}

            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    <Form.Label className="text-danger">{error}</Form.Label>
                </Form.Group>
                <Button variant="primary" className="btn btn-primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default Login;


/*

<Card style={{ width: '18rem' }}>
  <Card.Body>

  </Card.Body>
</Card>

*/