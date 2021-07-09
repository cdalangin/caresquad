import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { db, auth } from '../firebase/config.js'

export default function MainSite() {

    return (
        <div>
            <h1>MainSite</h1>
            <p>About, infographs, illustrations</p>

            {/* TODO: remove this bit when user is already logged in */}
            <h2>Go <Link to="/account">login</Link></h2>
        </div>

    )
}