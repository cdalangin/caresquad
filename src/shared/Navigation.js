import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Pursuit from "../img/Pursuit.png"

import { AuthContext } from '../AuthContext'
import { auth } from "../firebase/config"

export default function Navigation() {
    const { user, logout } = useContext(AuthContext)
    const history = useHistory()

    return (
        <Navbar variant="light" className="nav">
            <Container>
                <Navbar.Brand href="/"><img src={Pursuit} alt="App Logo" className="applogo" /></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {user ?
                        <Navbar.Text>
                            <h6 className="navtext m-0 logout" onClick={() => logout()}>Logout</h6>
                        </Navbar.Text>
                        :
                        <Navbar.Text>
                            <Link to="/account" className="navtext m-0"><h6 className="navtext m-0">LOGIN/SIGNUP</h6></Link>
                        </Navbar.Text>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}