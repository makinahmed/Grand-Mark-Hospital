import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { signInUser,user } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || "/home"

    const handleSubmit = e => {
        e.preventDefault();
        signInUser(email, password);
        history.push(redirect_url);
        
       
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