import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthContext } from './AuthContext.js'

import MainSite from "./main/MainSite"
import MainAuth from "./auth/MainAuth"
import Home from "./main/Home"
import Test from "./main/Test"
import AllQues from "./main/test/AllQues"
import Ques1 from "./main/test/Ques1"
import Result from "./main/test/Result"

import { auth, db } from "./firebase/config"

function App() {
  // const user = null
  const [appState, setAppState] = useState()

  useEffect(() => {
    const usersRef = db.collection('users');
    auth.onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            // setLoading(false)
            setAppState(userData)
          })
          .catch((err) => {
            // setLoading(false)
            console.log(err)
          });
      } else {
        // setLoading(false)
        console.log("No user")
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={appState}>
      <Router>

        {!appState ?
          (
            <Switch>
              <Route path="/account">
                <MainAuth />
              </Route><Route path="/">
                <MainSite />
              </Route>
            </Switch>
          )
          :
          (
            <Switch>
              <Route exact path="/result">
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
        }
      </Router >
    </AuthContext.Provider >
  );
}

export default App;
