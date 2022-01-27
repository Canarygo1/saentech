
import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index"
import Login from "./login"
import PrivateRoute from "../components/privateroute"
import Home from "./app/home"
import Statistics from "./app/statistics"
import Profile from "./app/profile"

const App = () => {
  return (
      <Router basepath="/app">
        <IndexPage path="/" />
        <Login path="/login" />
        <PrivateRoute component={Home} path="/admin" />
        <PrivateRoute component={Statistics} path="/statistics" />
        <PrivateRoute component={Profile} path="/profile" />
      </Router>
  )
}
export default App
