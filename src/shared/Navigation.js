import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function Navigation() {

    return (
        <Navbar expand="lg" variant="light" className="nav">
            <Container>
                <Navbar.Brand href="#">APP LOGO</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3">
                        <Link to="/account" className="navtext m-0"><h6 className="navtext m-0">LOGIN/SIGNUP</h6></Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}