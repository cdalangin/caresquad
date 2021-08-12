import React, { useState, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { db, auth } from '../firebase/config.js'
import { AuthContext } from '../AuthContext.js';
import './AuthStyle.css'

export default function Login(props) {
    const { login } = useContext(AuthContext)
    const clickHandler = props.clickHandler
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

        login(email, password)

        // auth.signInWithEmailAndPassword(email, password)
        //     .then(async (res) => {
        //         const uid = res.user.uid
        //         const usersRef = await db.collection('users')
        //         usersRef
        //             .doc(uid)
        //             .get()
        //             .then((firestoreDocument) => {
        //                 if (firestoreDocument.exists) {
        //                     const user = firestoreDocument.data()
        //                     history.push("/feed")
        //                 } else {
        //                     alert("User does not exist anymore.")
        //                     return;
        //                 }
        //             })
        //             .catch(err => {
        //                 alert(err)
        //             });
        //     })
        //     .catch(err => {
        //         alert(err)
        //     })
    }

    return (
        <div>
            <h1 className="text-center my-5">Login</h1>
            <Container className="logcard h-50 w-50 d-flex flex-column align-items-center justify-content-evenly px-5 mb-5">

                <Form.Group controlId="userEmail">
                    <Form.Label className="labels">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={userInfo.email}
                        onChange={handleOnChange} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label className="labels">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userInfo.password}
                        onChange={handleOnChange} />
                </Form.Group>

                <Button className="submit px-5" onClick={() => onLogin()} >
                    Submit
                </Button>

                <p onClick={() => clickHandler("toSignup")} className="clickhandler" >Don't have an account?  <span className="ps-2"> Register</span> </p>

            </Container>
        </div>
    )
}