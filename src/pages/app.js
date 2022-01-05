import Layout from "../components/layout"

import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./index"
import Login from "./login"
import SaentechProPage from "./saentech-pro"
import PrivateRoute from "../components/privateroute"

const App = () => {
  return (
      <Router basepath="/app">
        <IndexPage path="/" />
        <Login path="/login" />
          <PrivateRoute component={SaentechProPage}  path="/pro" />
      </Router>
  )
}
export default App
