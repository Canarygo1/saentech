import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "../../.cache/gatsby-browser-entry"



const IndexPage = () => {

  useEffect(()=>{

  })
  return <Layout>
    <Seo title="Catalogo" />
    <div className={'mx-10 mt-28 md:mt-0 min-h-screen'}>
      <span className="text-3xl text-white">Catalogos</span>
      <br/>
      <span className={"text-white text-md"}>Aquí puedes encontrar los catalogos de algunos de nuestros productos</span>
      <div className={"flex flex-row flex-wrap mt-8 justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4 "}>
        <div className={"w-64 h-64 border-primary border rounded-lg"}>
          <div className={"flex flex-col wf h-full w-11/12 justify-center ml-2"}>
            <div className={"mt-4  w-full flex flex-col "}>
            <StaticImage className={"object-cover"} src="../images/eminent.png" alt="A kitten" />
            </div>
            <p className={"text-white text-md mt-3"}>Especialista en redes, camaras de videovigilancia entre otros productos </p>
            <Link to={"https://www.ewent-eminent.com/deploy/ewent.php?lang=es&file=cat"}  target="_blank"
                  className="mb-6 mt-8 bg-primary text-white text-center font-bold py-2 mx-3 rounded-xl focus:outline-none focus:shadow-outline"
              type="button">
              Catalogo
            </Link>
          </div>
        </div>
        <div className={"w-64 h-64 border-primary border rounded-lg"}>
          <div className={"flex flex-col wf h-full w-11/12 justify-center ml-2"}>
            <div className={"mt-4  w-full flex flex-col "}>
            <StaticImage className={"object-cover"} src="../images/CrossCall.png" alt="A kitten" />
            </div>
            <p className={"text-white text-md mt-3"}>Especialista en teléfonos móviles de alta duración </p>
            <Link to={"http://www.saentech.com/wp-content/uploads/2021/10/Catalogo-Crosscall-2021_1-1.pdf"}  target="_blank"
                  className="mb-6 mt-8 bg-primary text-white text-center font-bold py-2 mx-3 rounded-xl focus:outline-none focus:shadow-outline"
              type="button">
              Catalogo
            </Link>
          </div>
        </div>
        <div className={"w-64 h-64 border-primary border rounded-lg"}>
          <div className={"flex flex-col wf h-full w-11/12 justify-center ml-2"}>
            <div className={"mt-4 max-h-10 w-full flex flex-col "}>
            <StaticImage className={"object-cover"} src="../images/injoo.png" alt="A kitten" />
            </div>
            <p className={"text-white text-md mt-3"}>InnJoo, la tecnología al alcance de todos. Desarrollamos productos de primera calidad. Precios competitivos para productos fiables. </p>
            <Link to={"https://fliphtml5.com/check/xtwce/svie/#p=1"}  target="_blank"
                  className="mb-6 mt-8 bg-primary text-white text-center font-bold py-2 mx-3 rounded-xl focus:outline-none focus:shadow-outline"
              type="button">
              Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage
