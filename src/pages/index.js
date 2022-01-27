import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstSection from "../components/sections/first-section"
import SecondSection from "../components/sections/second-section"
import Separator from "../components/separator"
import ThirdSection from "../components/sections/third-section"
import FifthSection from "../components/sections/fifth-section"
import { useEffect } from "react"
import app from 'gatsby-plugin-firebase-v9.0'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const IndexPage = () => {

useEffect(()=>{

})
  return <Layout>
    <Seo title="Home" />
    <Separator dataHeigth="100px" dataWidth="1px" />
    <FirstSection />
    <Separator dataHeigth="50px" dataWidth="1px" />
    <SecondSection />
    <Separator dataHeigth="80px" dataWidth="1px" />
    <ThirdSection />
    <Separator dataHeigth="80px" dataWidth="1px" />
    <FifthSection />
    <Separator dataHeigth="80px" dataWidth="1px" />
  </Layout>
}

export default IndexPage
