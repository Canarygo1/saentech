import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"

const SubvencionesPage = () => {

  const [isOpen,setIsOpen] = useState(false);

  const clickAccordion = (event) => {
    setIsOpen(!isOpen);
  };

  return <Layout>
    <Seo title="Subvenciones" />
    <div className={"xl:mx-10 mx-2 mt-28 md:mt-0 leading-11 min-h-screen"}>
      <div className={"flex xl:flex-row flex-col w-full items-center flex-wrap"}>
        <div className={"xl:w-1/2 w-full flex mb-16 xl:mb-0 flex-col gap-7 items-center"}>
          <span className="text-8xl text-white text-center">Consigue hasta 12000€ de subvención para empresas y autónomos ¡YA!</span>
          <div className={"xl:px-16 xl:py-1 border-2 text-center border-solid border-primary rounded-md w-full xl:w-auto"}>
            <span className={"text-primary font-bold"}>Hasta 12000€</span>
          </div>
        </div>
        <div className={"xl:w-1/2 w-full flex justify-center z-50"}>
          <div className={"p-4 flex flex-col w-4/5 rounded-xl bg-gradient-to-bl from-primary to-transparent"}>
            <span className="text-3xl text-white text-center">Despeguemos juntos</span>
            <label htmlFor="nombre" className={"text-white"}>Nombre</label>
            <input className={"rounded-md px-2"} type="text" id="nombre" name="nombre" />
            <label htmlFor="empresa" className={"text-white"}>Empresa</label>
            <input className={"rounded-md px-2"} type="text" id="empresa" name="empresa" />
            <label htmlFor="correo" className={"text-white"}>Correo electrónico</label>
            <input className={"rounded-md px-2"} type="text" id="correo" name="correo" />
            <label htmlFor="telefono" className={"text-white"}>Teléfono</label>
            <input className={"rounded-md px-2"} type="text" id="telefono" name="telefono" />
            <span className={"text-white"}>Tamaño empresa</span>
            <div className={"flex justify-between"}>
              <div className={"flex items-center"}>
                <input type="radio" id="pequena" name="type" />
                <label htmlFor="pequena" className={"text-white text-sm ml-4"}>1 y 2 trabajodres.</label>
              </div>
              <div className={"flex items-center"}>
                <input type="radio" id="medio" name="type" />
                <label htmlFor="medio" className={"text-white text-sm ml-4"}>3 y 9 trabajodres.</label>
              </div>
              <div className={"flex items-center"}>
                <input type="radio" id="grande" name="type" />
                <label htmlFor="grande" className={"text-white text-sm ml-4"}>10 y 50 trabajodres.</label>
              </div>
            </div>
            <div className={"px-16 py-1 border-2 border-solid bg-primary rounded-md self-center"}>
              <span className={"text-white font-bold"}>Enviar</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"bgCohete hidden xl:block"}/>
      <div className={"bgPromo hidden xl:block"}/>
      <div className={"flex flex-col items-center my-16"}>
        <p className={"text-4xl text-white mb-5 text-center"}><span className={"text-primary font-bold"}>Subvención </span>acelera Pyme
          kit Digital.</p>
        <div className={"flex flex-col xl:flex-row justify-center w-full xl:w-2/3 xl:px-32"}>
          <img className={"h-20 xl:w-auto w-full"} src={require('./../images/marcas/Promo1.png').default} alt={"promo1"}/>
          <img className={"h-20 xl:w-auto w-full"} src={require('./../images/marcas/Promo2.png').default} alt={"promo2"}/>
        </div>
      </div>
      <div className={"robot xl:block hidden"}/>
      <div className={"flex flex-col items-center w-full"}>
        <p className={"text-3xl text-white mb-16 text-center"}>No pierdas <span
          className={"text-primary font-bold"}>la mejor oportunidad </span>para digitalizar tu negocio.</p>
        <div className={"flex mx-30 xl:mx-0 flex-col xl:flex-row w-full items-center xl:justify-between gap-20 xl:gap-36"}>
          <div className={"text-center bg-ticket rounded-lg ticket"}>
            <div className={"pt-4 px-4"}>
              <span className={"text-white text-2xl font-bold"}>Segmento 1</span>
              <p className={"text-white text-1xl"}>Entre <span className={"font-bold"}>10</span> y <span
                className={"font-bold"}>50</span> empleados </p>
            </div>
            <div className={"flex w-full justify-between"}>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
            </div>
            <div className={"py-9 px-4 flex justify-between mb-7"}>
              <div className={"dot dotLeft"}></div>
              <span className={"text-primary text-3xl font-bold"}>Bono digital 12000€</span>
              <div className={"dot dotRight"}></div>
            </div>
            <div className={"pb-4 px-4 text-center"}>
              <div className={"px-16 py-1 border-2 border-solid bg-primary rounded-md self-center"}>
                <span className={"text-white text-3xl font-bold"}>Solicitar</span>
              </div>
            </div>
          </div>
          <div className={"text-center bg-ticket rounded-lg ticket"}>
            <div className={"pt-4 px-4"}>
              <span className={"text-white text-2xl font-bold"}>Segmento 2</span>
              <p className={"text-white text-1xl"}>Entre <span className={"font-bold"}>2</span> y <span
                className={"font-bold"}>10</span> empleados </p>
            </div>
            <div className={"flex w-full justify-between"}>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
            </div>
            <div className={"py-9 px-4 flex justify-between mb-7"}>
              <div className={"dot dotLeft"}></div>
              <span className={"text-primary text-3xl font-bold"}>Bono digital 6000€</span>
              <div className={"dot dotRight"}></div>
            </div>
            <div className={"pb-4 px-4 text-center"}>
              <div className={"px-16 py-1 border-2 border-solid bg-primary rounded-md self-center"}>
                <span className={"text-white text-3xl font-bold"}>Solicitar</span>
              </div>
            </div>
          </div>
          <div className={"text-center bg-ticket rounded-lg ticket"}>
            <div className={"pt-4 px-4"}>
              <span className={"text-white text-2xl font-bold"}>Segmento 1</span>
              <p className={"text-white text-1xl"}>Entre <span className={"font-bold"}>1</span> y <span
                className={"font-bold"}>2</span> empleados </p>
            </div>
            <div className={"flex w-full justify-between"}>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
              <div className={"h-px bg-black w-8"}></div>
            </div>
            <div className={"py-9 px-4 flex justify-between mb-7"}>
              <div className={"dot dotLeft"}></div>
              <span className={"text-primary text-3xl font-bold"}>Bono digital 2000€</span>
              <div className={"dot dotRight"}></div>
            </div>
            <div className={"pb-4 px-4 text-center"}>
              <div className={"px-16 py-1 border-2 border-solid bg-primary rounded-md self-center"}>
                <span className={"text-white text-3xl font-bold"}>Solicitar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-36 mb-36"}>
        <p className={"text-4xl text-white text-center mb-10"}><span
          className={"text-primary font-bold"}>Preguntas </span>frecuentes</p>
        <div className={"w-full py-1 px-4 bg-ticket rounded-md self-center flex justify-between"} onClick={clickAccordion}>
          <span className={"text-white text-1xl"}>Que es el KIT Digital</span>
          <span className={"text-white text-1xl js-signal"}>{isOpen ? '-' : '+'}</span>
        </div>
        <span className={`w-full py-1 px-4 text-black text-1xl textAccordion ${isOpen ? 'block' : 'hidden'}`} >
          Es un programa de la Unión Europea de ayudas a las empresas a digitalizar sus negocios dado que la situación de la pandemia ha acelerado el cambio cultural y tecnológico del consumo en general.
        </span>
      </div>
    </div>
  </Layout>
}

export default SubvencionesPage
