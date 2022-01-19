
import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index"
import Login from "./login"
import PrivateRoute from "../components/privateroute"
import Home from "./app/home"

const App = () => {
  return (
      <Router basepath="/app">
        <IndexPage path="/" />
        <Login path="/login" />
        <PrivateRoute component={Home} path="/admin" />
      </Router>
  )
}
export default App
