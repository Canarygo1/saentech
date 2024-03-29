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

const Layout = ({ children }) => {
  return (
    <>
      <div className={'min-h-screen'}>
      <Header />
      <main className={"pt-16 "}>
        {children}
      </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
