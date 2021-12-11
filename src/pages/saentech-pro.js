import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Separator from "../components/separator"

const SaentechProPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col w-full mx-10 mt-28 xl:mt-0 text-white">
      <span className="text-3xl">Saentech Pro</span>
      <div className="w-3/4 mt-10 flex flex-col text-lg">
        <span>
          Saentech PRO, división profesional de valor de
          Saentech Canarias nace con el objetivo de ofrecer formación
          y dar soporte al canal, así como a los fabricantes cuyas soluciones promueve.
        </span>
        <span className="mt-10">
          Disponemos de Red comercial PRO y técnica que asesora
          al cliente aportando un valor añadido en entornos
          más profesionales. Prescripción de productos, servicios, instalación y mantenimiento para ofrecer una solución completa.
        </span>
      </div>
      <Separator dataHeigth="100px" dataWidth="1px" />
      <span className="text-2xl">Nuestros Servicios:</span>
      <Separator dataHeigth="40px" dataWidth="1px" />
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col items-center">
          <div className="bg-blue w-56 h-56 my-5 rounded-3xl">
          <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12">
          </div>
        </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
            Software
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-darkGreen w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12">
            </div>
          </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
              Redes y seguridad
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-lightGreen w-56 h-56 my-5 rounded-3xl">
          <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12">
          </div>
        </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
              Audiovisuales
          </span>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-primary w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12">
            </div>
          </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
                Equipamiento
            </span>
        </div>
      </div>
    </div>
    <Separator dataHeigth="100px" dataWidth="1px" />
  </Layout>
)


export default SaentechProPage
