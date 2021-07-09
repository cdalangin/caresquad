import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { db, auth } from '../firebase/config.js'

export default function Home() {
    const history = useHistory()

    const logout = () => {
        auth.signOut().then(() => {
            history.push('/')
            window.location.reload();
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Take<Link to="/test">test</Link></h2>
            <p>Media/Networking Page</p>

            <h2 onClick={() => logout()}>Logout</h2>
        </div>

    )
}