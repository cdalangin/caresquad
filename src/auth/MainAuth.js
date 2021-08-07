import { React, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login"
import Signup from "./Signup"
import Navigation from '../shared/Navigation.js';
import './AuthStyle.css'


export default function MainAuth() {
    const [login, setLogin] = useState(true)


    const clickHandler = (choice) => {
        console.log(choice)
        if (choice === "toSignup") {
            console.log("Does this work?")
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    return (
        <div className="body">
            <Navigation />
            <Container>
                <Row>
                    {login ? <Login clickHandler={clickHandler} /> : <Signup clickHandler={clickHandler} />}
                    {/* <h3 onClick={() => setLogin(!login)}>New user</h3> */}
                </Row>
            </Container>
        </div>
    );
}


