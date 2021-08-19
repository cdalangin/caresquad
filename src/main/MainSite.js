import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Button from 'react-bootstrap/Button'
import Navigation from "../shared/Navigation.js"
import Container from 'react-bootstrap/Container'
import Connect from "../img/connect.png"
import Quiz from "../img/quiz.png"
import Popup from "../img/popup.png"
// import { db, auth } from '../firebase/config.js'

export default function MainSite() {

    const steps_arr = [
        {
            "num": "1",
            "title": "Sign up",
            "subtitle": "Take your first step on creating your account.",
            "img": Popup
        }, {
            "num": "2",
            "title": "Take a quiz",
            "subtitle": "Help us customize your own networking page!",
            "img": Quiz
        }, {
            "num": "3",
            "title": "Connect",
            "subtitle": "Connect with others to learn more about the career you are interested in.",
            "img": Connect
        },
    ]

    return (
        <div className="body">
            <Navigation />
            <div className="hero d-flex flex-column align-items-center justify-content-center px-5">
                <h1 variant="danger" className="mb-5">Welcome to Pursuit</h1>
                <p className="mb-5">If you have difficulty choosing the right track for your career or need help connecting with people with your field, you are in the right place.
                    Pursuit not only helps students pick the right career, but also help them network with different people from the field. By taking our career quiz, we will suggest the best career track suitable for you.
                </p>
                <div className="takequiz py-4 px-4">
                    <Link to="/test" className="quizlink">Take the Quiz</Link>
                </div>

            </div>
            <div className="steps d-flex flex-column  align-items-center justify-content-center">
                <h1 className="m-5">How does it work?</h1>
                {steps_arr.map((st) => {

                    return (
                        <div className="stepblock d-flex flex-row mb-5 justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="stepnum d-flex align-items-center justify-content-center me-4"><h1>{st.num}</h1></div>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <h2 className="text-start">{st.title}</h2>
                                <p className="text-start">{st.subtitle}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center p-3 w-50">
                                <img src={st.img} alt={st.title} className="img-fluid" />
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}