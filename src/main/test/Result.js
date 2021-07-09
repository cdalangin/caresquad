import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { db, auth } from '../firebase/config.js'

export default function Result() {

    return (
        <div>
            <h1>Result</h1>
            <p>Insert info about major, career choice, etc</p>
            <p>Go home<Link to="/feed">Click here</Link></p>
        </div>

    )
}