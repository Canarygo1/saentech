import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "../../.cache/gatsby-browser-entry"
import { getAllCatalogos } from "../api/api"
import { element } from "prop-types"


const IndexPage = () => {

  const [dossiers,setDossiers] = useState([]);
  useEffect(() => {
    async function getDossiers() {
      let data = await getAllCatalogos();
      console.log(data)
      setDossiers(data)
    }
    getDossiers()
  }, [])
  return <Layout>
    <Seo title="Catalogo" />
    <div className={"mx-10 mt-28 md:mt-0 min-h-screen"}>
      <span className="text-3xl text-white">Catálogos</span>
      <br />
      <span className={"text-white text-md"}>Aquí puedes encontrar los catálogos de algunos de nuestros productos</span>
      <div
        className={"flex flex-row flex-wrap mt-8 justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4 "}>

        {dossiers.map((value, index)=>{
          return (
            <div className={"w-64 h-64 border-primary border rounded-lg"}>
              <div className={"flex flex-col wf h-full w-11/12 justify-center ml-2"}>
                <div className={"mt-4 max-h-10 w-full flex flex-col justify-center "}>
                  <img className={"object-cover"} src={value.logo} alt="A kitten" />
                </div>
                <div className={'flex flex-col justify-end '}>

                <Link to={value.web} target="_blank"
                      className="mb-6 mt-6  bg-primary text-white text-center font-bold py-2 mx-3 rounded-xl focus:outline-none focus:shadow-outline"
                      type="button">
                  Web
                </Link>
                <Link to={value.archivo===null?value.link:value.archivo} target="_blank"
                      className="mb-6  bg-primary text-white text-center font-bold py-2 mx-3 rounded-xl focus:outline-none focus:shadow-outline"
                      type="button">
                  Catálogo
                </Link>
                </div>

              </div>
            </div>

          )
        })}
      </div>
    </div>
  </Layout>
}

export default IndexPage
