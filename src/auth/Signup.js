import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import { db, auth } from '../firebase/config.js'

export default function Signup() {
    const initialState = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [userInfo, setUserInfo] = useState(initialState)
    const history = useHistory();

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setUserInfo({ ...userInfo, [name]: value })
    }

    // TODO: Maybe do async somewhere so that it loads to test immediately

    const register = () => {
        const userEmail = userInfo.email
        const userName = userInfo.fullName

        if (userInfo.password !== userInfo.confirmPassword) {
            alert("Passwords don't match")
            return
        }
        else {
            auth.createUserWithEmailAndPassword(userEmail, userInfo.password)
                .then((res) => {
                    const uid = res.user.uid
                    const data = {
                        id: uid,
                        userEmail,
                        userName
                    };

                    const usersRef = db.collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(() => history.push('/test'))
                        .catch((err) => {
                            alert(err)
                        });
                })
                .catch((err) => {
                    alert(err)
                })
        }

    }

    return (
        <Container>
            <Form.Group controlId="fullName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter name"
                    value={userInfo.fullName}
                    onChange={handleOnChange} />
            </Form.Group>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={userInfo.email}
                    onChange={handleOnChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={handleOnChange} />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
                <Form.Label>Reenter Password</Form.Label>
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Reenter Password"
                    value={userInfo.confirmPassword}
                    onChange={handleOnChange} />
            </Form.Group>
            <Button variant="primary" onClick={() => register()} >
                Submit
            </Button>
        </Container>

    )
}