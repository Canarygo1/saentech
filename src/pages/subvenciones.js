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
    <div className={"mx-10 mt-28 md:mt-0 leading-11 min-h-screen"}>
      <div className={"flex w-full items-center"}>
        <div className={"w-1/2 flex flex-col gap-7 items-center"}>
          <span className="text-8xl text-white text-center">Consigue hasta 12000€ de subvención para empresas y autónomos ¡YA!</span>
          <div className={"px-16 py-1 border-2 border-solid border-primary rounded-md"}>
            <span className={"text-primary font-bold"}>Hasta 12000€</span>
          </div>
        </div>
        <div className={"w-1/2 flex justify-center"}>
          <div className={"p-4 flex flex-col w-3/5 rounded-xl bg-gradient-to-bl from-primary to-transparent"}>
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
                <input type="radio" id="pequena" name="pequena" />
                <label htmlFor="pequena" className={"text-white text-sm ml-4"}>1 y 2 trabajodres.</label>
              </div>
              <div className={"flex items-center"}>
                <input type="radio" id="medio" name="medio" />
                <label htmlFor="medio" className={"text-white text-sm ml-4"}>3 y 9 trabajodres.</label>
              </div>
              <div className={"flex items-center"}>
                <input type="radio" id="grande" name="grande" />
                <label htmlFor="grande" className={"text-white text-sm ml-4"}>10 y 50 trabajodres.</label>
              </div>
            </div>
            <div className={"px-16 py-1 border-2 border-solid bg-primary rounded-md self-center"}>
              <span className={"text-white font-bold"}>Enviar</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex justify-center"}>
        <p className={"text-4xl text-white"}><span className={"text-primary font-bold"}>Subvención </span>acelera Pyme
          kit Digital.</p>
      </div>
      <div className={"flex flex-col items-center w-full"}>
        <p className={"text-3xl text-white"}>No pierdas <span
          className={"text-primary font-bold"}>la mejor oportunidad </span>para digitalizar tu negocio.</p>
        <div className={"flex w-full justify-between gap-36"}>
          <div className={"w-1/3 text-center bg-ticket rounded-lg ticket"}>
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
          <div className={"w-1/3 text-center bg-ticket rounded-lg ticket"}>
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
          <div className={"w-1/3 text-center bg-ticket rounded-lg ticket"}>
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
