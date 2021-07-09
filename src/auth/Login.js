import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { db, auth } from '../firebase/config.js'

export default function Login() {
    const initialState = {
        email: "",
        password: ""
    }

    const [userInfo, setUserInfo] = useState(initialState)
    const history = useHistory();

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setUserInfo({ ...userInfo, [name]: value })
    }

    const onLogin = async () => {
        const email = userInfo.email
        const password = userInfo.password

        auth.signInWithEmailAndPassword(email, password)
            .then(async (res) => {
                const uid = res.user.uid
                const usersRef = await db.collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (firestoreDocument.exists) {
                            const user = firestoreDocument.data()
                            history.push("/feed")
                        } else {
                            alert("User does not exist anymore.")
                            return;
                        }
                    })
                    .catch(err => {
                        alert(err)
                    });
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <Container>

            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={userInfo.email}
                    onChange={handleOnChange} />
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

            <Button variant="primary" onClick={() => onLogin()} >
                Submit
            </Button>

        </Container>

    )
}