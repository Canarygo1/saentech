import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstSection from "../components/sections/first-section"
import SecondSection from "../components/sections/second-section"
import Separator from "../components/separator"
import ThirdSection from "../components/sections/third-section"
import FifthSection from "../components/sections/fifth-section"
import { useEffect } from "react"
import Circuiteria from "../components/circuiteria/circuiteria"


const IndexPage = () => {

  useEffect(() => {

  })
  return (
    <Layout>
      <Seo title="Home" />
      <Separator dataHeigth="0px" dataWidth="1px" />
      <FirstSection />
      <Separator dataHeigth="50px" dataWidth="1px" />
      <SecondSection />
      <Separator dataHeigth="80px" dataWidth="1px" />
      <ThirdSection />
      <Separator dataHeigth="80px" dataWidth="1px" />
      <FifthSection />
      <Separator dataHeigth="80px" dataWidth="1px" />
    </Layout>
  )
}

export default IndexPage
