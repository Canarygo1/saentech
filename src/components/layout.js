/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./style.css"
import Footer from "./footer"
import Header from "./header/header"
import Circuiteria from "./circuiteria/circuiteria.js"

const Layout = ({ children }) => {
  return (
    <>
      <div className={"hidden xl:flex"}>
        <Circuiteria/>
      </div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
