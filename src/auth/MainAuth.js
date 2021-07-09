import { React, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login"
import Signup from "./Signup"


export default function MainAuth() {
    const [login, setLogin] = useState(true)

    return (
        <Container>
            <Row>
                {login ? <Login /> : <Signup />}
                <h3 onClick={() => setLogin(!login)}>New user</h3>
            </Row>
        </Container>
    );
}


