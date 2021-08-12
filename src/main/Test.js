import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { db, auth } from '../firebase/config.js'
import { Container, Row, Form, Button } from "react-bootstrap";
import Navigation from '../shared/Navigation'
import { questions } from "./Questions"

export default function Test() {
    const initialState = {
        "q1": "",
        "q2": "",
        "q3": "",
        "q4": "",
        "q5": "",
        "q6": "",
    }
    const [selected, setSelected] = useState(initialState)
    const select = []


    // TODO: Optimize this
    const onSelect = (key, choice) => {
        switch (key) {
            case 1:
                setSelected(prevState => ({ ...prevState, q1: choice }))
                break
            case 2:
                setSelected(prevState => ({ ...prevState, q2: choice }))
                break
            case 3:
                setSelected(prevState => ({ ...prevState, q3: choice }))
                break
            case 4:
                setSelected(prevState => ({ ...prevState, q4: choice }))
                break
            case 5:
                setSelected(prevState => ({ ...prevState, q5: choice }))
                break
            case 6:
                setSelected(prevState => ({ ...prevState, q6: choice }))
                break
        }
    }

    // TODO: on click changes color of selected
    return (
        <div className="body">
            <Navigation />
            <Container>
                <Row>
                    <h1 className="text-center my-5">What is your interest?</h1>
                    <Container className="testcard d-flex flex-column align-items-center justify-content-evenly py-3 mb-5">
                        {questions.map((question) => {
                            return (
                                <div className="w-75">
                                    <h5 className="testLabels my-3">{question.title}</h5>
                                    {question.choices.map((choice) => {
                                        return (
                                            <div>
                                                <div className="choiceButton mb-2 ps-3 py-1" onClick={() => onSelect(question.key, choice)} >{choice}</div>
                                                {/* <div className="mb-3">
                                                    <Form.Check
                                                        label="1"
                                                        name="group1"
                                                        type="radio"
                                                        id={`inline-radio-1`}
                                                    />
                                                    <Form.Check
                                                        label="2"
                                                        name="group1"
                                                        type="radio"
                                                        id={`inline-radio-2`}
                                                    />
                                                    <Form.Check
                                                        disabled
                                                        label="3 (disabled)"
                                                        type="radio"
                                                        id={`inline-radio-3`}
                                                    />
                                                </div> */}
                                            </div>
                                        )
                                    })

                                    }
                                </div>
                            )
                        })

                        }
                        <Button className="submit px-5 m-5 " onClick={() => { console.log(selected) }} >
                            Submit
                        </Button>
                        {/* <Form.Group controlId="fullName">
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
                        <Button className="submit px-5" onClick={() => onRegister()} >
                            Submit
                        </Button>

                        <p onClick={() => clickHandler("toLogin")} className="clickhandler" >Already have an account?  <span className="ps-2"> Login</span> </p> */}
                    </Container>

                </Row>
            </Container>
        </div>


        // <div>
        //     <h1>Test</h1>
        //     <h2>Go home<Link to="/feed">Click here</Link></h2>
        //     <h3>Start test<Link to="/test/ques1">Click here</Link></h3>
        // </div>

    )
}