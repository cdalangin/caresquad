import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Navigation from '../../shared/Navigation'
import UX from "../../img/uxdesign.svg"
// import { db, auth } from '../firebase/config.js'

export default function Result() {
    const history = useHistory()

    return (
        <div>
            <div className="body">
                <Navigation />
                <div className="resultsection d-flex flex-column align-items-center justify-content-center px-5">
                    <h1 variant="danger" className="mb-5">You're likely to flourish in...</h1>
                    <img src={UX} alt="UX design" className="resultimg" />
                    <p className="resultlabels mb-2">UX/UI Designing</p>

                </div>
                <div className="resultsbuttons d-flex flex-row align-items-center justify-content-evenly px-5">
                    <Button className="submit px-5" onClick={() => { history.push("/test") }} >
                        Retake Quiz
                    </Button>
                    <Button className="submit px-5" onClick={() => { history.push("/test") }} >
                        Proceed
                    </Button>
                </div>
            </div>
        </div >

    )
}