import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Separator from "../components/separator"
import { Link } from "../../.cache/gatsby-browser-entry"

const SaentechProPage = () => (
  <Layout>
    <Seo title="Saentech Pro" />
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
        <Link to={"/saentech-pro/software"}>
        <div className="flex flex-col items-center">
          <div className="bg-blue w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12" style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/pro%2FSoftware_img.png?alt=media&token=863e1b22-259c-4691-983d-5fa1568228c2')` }}>
            </div>
        </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
            Software
          </span>
        </div></Link>
        <Link to={"/saentech-pro/network"}>
        <div className="flex flex-col items-center">
          <div className="bg-darkGreen w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12" style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/pro%2FNetwork_img.png?alt=media&token=f1a22473-576e-4dc2-bf74-f0dd1f1a3fd3')` }}>
            </div>
          </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
              Redes y seguridad
          </span>
        </div>
        </Link>
        <Link to={"/saentech-pro/audiovisual"}>
        <div className="flex flex-col items-center">
          <div className="bg-lightGreen w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12" style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/pro%2FAudiovisual_img.png?alt=media&token=074ce2ea-e919-4db6-9f71-7471c46c1233')` }}>
            </div>
        </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
              Audiovisuales
          </span>
        </div>
        </Link>
        <Link to={"/saentech-pro/equipament"}>
        <div className="flex flex-col items-center">
          <div className="bg-primary w-56 h-56 my-5 rounded-3xl">
            <div className="bg-secondary w-full h-full rounded-3xl transform rotate-12" style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/saentech-3e813.appspot.com/o/pro%2FMantenimiento_img.png?alt=media&token=945c7586-0293-4ee2-8e8d-320dba4ad159')` }}>
            </div>
          </div>
          <Separator dataHeigth="30px" dataWidth="1px" />
          <span className="text-3xl">
                Equipamiento
            </span>
        </div>
        </Link>
      </div>
    </div>
    <Separator dataHeigth="100px" dataWidth="1px" />
  </Layout>
)


export default SaentechProPage
