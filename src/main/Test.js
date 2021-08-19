import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { db, auth } from '../firebase/config.js'
import { Container, Row, Form, Button } from "react-bootstrap";
import Navigation from '../shared/Navigation'
import { questions } from "./Questions"
import { AuthContext } from '../AuthContext';

export default function Test() {
    const history = useHistory();
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

                                            </div>
                                        )
                                    })

                                    }
                                </div>
                            )
                        })

                        }
                        <Button className="submit px-5 m-5 " onClick={() => { history.push("/results") }} >
                            Submit
                        </Button>

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