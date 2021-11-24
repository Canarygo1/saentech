import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstSection from "../components/first-section"
import SecondSection from "../components/second-section"
import Separator from "../components/separator"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <FirstSection />
    <Separator dataHeigth="50px" dataWidth="1px"/>
    <SecondSection />
  </Layout>
)

export default IndexPage
