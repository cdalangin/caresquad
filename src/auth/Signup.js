import React, { useEffect, useState, useContext } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../AuthContext.js';
import { db, auth } from '../firebase/config.js'

export default function Signup(props) {
    const { register } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const clickHandler = props.clickHandler
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

    const onRegister = async () => {
        const userEmail = userInfo.email
        const userName = userInfo.fullName
        const password = userInfo.password
        const confirmPassword = userInfo.confirmPassword

        await register(userName, userEmail, password, confirmPassword)
        // try {
        //     setError("")
        //     setLoading(true)
        //     await register(userName, userEmail, password, confirmPassword)
        // } catch {
        //     setError("Failed to create an account")
        // }

        // setLoading(false)

    }

    return (
        <div>
            <h1 className="text-center my-5">Sign Up</h1>
            <Container className="signcard d-flex flex-column align-items-center justify-content-evenly py-3 px-5  mb-5">
                <Form >
                    <Form.Group controlId="fullName">
                        <Form.Label className="labels">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fullName"
                            placeholder="Enter name"
                            value={userInfo.fullName}
                            onChange={handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId="userEmail">
                        <Form.Label className="labels">Email address</Form.Label>
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
                    <Form.Group controlId="confirmPassword">
                        <Form.Label className="labels">Reenter Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            placeholder="Reenter Password"
                            value={userInfo.confirmPassword}
                            onChange={handleOnChange} />
                    </Form.Group>

                </Form>
                <Button onClick={() => onRegister()} className="submit px-5">
                    Submit
                </Button>
                <p onClick={() => clickHandler("toLogin")} className="clickhandler" >Already have an account?  <span className="ps-2"> Login</span> </p>
            </Container>
        </div>

    )
}