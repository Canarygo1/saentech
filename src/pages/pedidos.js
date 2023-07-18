import React, { useState } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import ExampleDoc from '../images/registro_bajo_pedido.pdf'

function Pedidos({}) {
  const [noRegister,setNoRegister] = useState(false);

  const register = () => {
    setNoRegister(true)
  }
  return (
  <Layout>
      <div className={'flex justify-center items-center h-full'}>
        {!noRegister?<div className={"flex flex-col justify-center items-center border-primary border-2 h-80 rounded-lg p-8"}>
          <StaticImage
            className="w-12 mb-6"
            src="./../../images/logo.png"
            width={63}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
          <p className={"text-white"}>Ya estas registrado en nuestro sistema de bajo pedido?</p>
          <div className={"flex flex-row gap-8 mt-8"}>
            <a href={'https://bajopedido.saentech.com/'} target='_blank'>
            <button className={"border-primary bg-primary py-1 px-10 rounded-md text-white"}>Sí</button>
            </a>
            <button className={"border-primary bg-transparent border-2 py-1 px-10 rounded-md text-white"} onClick={register}>No</button>
          </div>
        </div>
          :
          <div className={"flex flex-col justify-center items-center border-primary border-2 h-80 rounded-lg p-8"}>
            <StaticImage
              className="w-12 mb-6"
              src="./../../images/logo.png"
              width={63}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
            <p className={"text-white"}>Rellena este formulario y envialo a comercial@saentech.com</p>
            <div className={"flex flex-row gap-8 mt-8"}>
              <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
                <button className={"border-primary bg-primary py-1 px-10 rounded-md text-white"}>Descargar formulario</button>
              </a>
            </div>
          </div>
        }
      </div>
  </Layout>

  )
}

export default Pedidos
