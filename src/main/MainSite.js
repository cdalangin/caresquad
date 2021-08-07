import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Button from 'react-bootstrap/Button'
import Navigation from "../shared/Navigation.js"
import Container from 'react-bootstrap/Container'
// import { db, auth } from '../firebase/config.js'

export default function MainSite() {

    const steps_arr = [
        {
            "num": "1",
            "title": "Sign up",
            "subtitle": "Take your first step on creating your account.",
            "img": ""
        }, {
            "num": "2",
            "title": "Take a quiz",
            "subtitle": "Help us customize your own networking page!",
            "img": ""
        }, {
            "num": "3",
            "title": "Connect",
            "subtitle": "Connect with others to learn more about the career you are interested in.",
            "img": ""
        },
    ]

    return (
        <div className="body">
            <Navigation />
            <div className="hero d-flex flex-column align-items-center justify-content-center px-5">
                <h1 variant="danger" className="mb-5">Welcome to *app name*</h1>
                <p className="mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <Button pill variant="primary" size="lg" className="takequiz py-3">
                    Take the Quiz
                </Button>

            </div>
            <div className="steps d-flex flex-column  align-items-center justify-content-center">
                <h1 className="m-5">How does it work?</h1>
                {steps_arr.map((st) => {

                    return (
                        <div className="stepblock d-flex flex-row mb-5">
                            <div className="d-flex align-items-center">
                                <div className="stepnum d-flex align-items-center justify-content-center me-4"><h1>{st.num}</h1></div>
                            </div>
                            <div>
                                <h2>{st.title}</h2>
                                <p className="text-start">{st.subtitle}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}