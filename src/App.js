import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from './AuthContext.js'
import MainNav from "./MainNav.js"

import { auth, db } from "./firebase/config"

function App() {

  return (
    <AuthProvider>
      <MainNav />
    </AuthProvider >
  );
}

export default App;
