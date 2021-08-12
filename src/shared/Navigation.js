import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { AuthContext } from '../AuthContext'
import { auth } from "../firebase/config"

export default function Navigation() {
    const { user, logout } = useContext(AuthContext)
    const history = useHistory()

    // const logout = () => {
    //     auth.signOut().then(() => {
    //         history.push('/')
    //         window.location.reload();
    //     }).catch((error) => {
    //         console.log(error.message)
    //     })
    // }

    return (
        <Navbar variant="light" className="nav">
            <Container>
                <Navbar.Brand href="#">APP LOGO</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {user ?
                        <Navbar.Text>
                            <h6 className="navtext m-0" onClick={() => logout()}>Logout</h6>
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