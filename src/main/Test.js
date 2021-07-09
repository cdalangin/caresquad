import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { db, auth } from '../firebase/config.js'

export default function Test() {

    return (
        <div>
            <h1>Test</h1>
            <h2>Go home<Link to="/feed">Click here</Link></h2>
            <h3>Start test<Link to="/test/ques1">Click here</Link></h3>
        </div>

    )
}