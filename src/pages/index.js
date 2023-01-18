import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FirstSection from "../components/sections/first-section"
import SecondSection from "../components/sections/second-section"
import Separator from "../components/separator"
import ThirdSection from "../components/sections/third-section"
import FifthSection from "../components/sections/fifth-section"
import { Script } from "gatsby"

const IndexPage = () => {


  return (
    <Layout>
      <Script src="//code.tidio.co/qqcg8kzwuexeh1fdlrjvx5va1yj3s2q3.js" async/>
      <Seo title="Home" />
      <Separator dataHeigth="0px" dataWidth="1px" />
      <div
        data-aos="fade-left" //Here you can use any of the AOS animations
      >
      <FirstSection />
      </div>
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
