import React, { useState, useEffect, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainSite from "./main/MainSite"
import MainAuth from "./auth/MainAuth"
import Home from "./main/Home"
import Test from "./main/Test"
import AllQues from "./main/test/AllQues"
import Ques1 from "./main/test/Ques1"
import Result from "./main/test/Result"

import { AuthContext } from "./AuthContext.js"


export default function MainNav() {
    const { user, setUser } = useContext(AuthContext)
    return (
        <Router>

            {user ?
                (
                    <Switch>
                        <Route exact path="/results">
                            <Result />
                        </Route>
                        <Route exact path="/test/:slug">
                            <AllQues />
                        </Route>
                        <Route path="/test/ques1">
                            <Ques1 />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                        <Route path="/feed">
                            <Home />
                        </Route>
                        <Route path="/">
                            <MainSite />
                        </Route>

                    </Switch>
                )
                :
                (
                    <Switch>
                        <Route exact path="/results">
                            <Result />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                        <Route path="/account">
                            <MainAuth />
                        </Route><Route path="/">
                            <MainSite />
                        </Route>
                    </Switch>
                )
            }
        </Router >
    )
}