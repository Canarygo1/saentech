import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEffect } from "react"
import Textfield from "../components/textfield"
import Select from 'react-select';

const options = [
  { value: 'comercial', label: 'Comercial' },
  { value: 'tecnico', label: 'Técnico' }
]

const Contacto = () => {

  useEffect(()=>{

  })
  return <Layout>
    <Seo title="Home" />
    <div className={"mt-28 flex flex-col items-center"}>
      <div>
        <p className={"text-white text-xl font-bold "}>Datos de contacto</p>
      </div>
      <div className={"flex flex-col lg:flex-row  w-3/4  "}>
        <div className={"basis-1/2 lg:w-2/3 flex  flex-col"}>
          <p className={"text-white text-lg lg:min-w-100 h-1"}>¿En qué te podemos ayudar?</p>
          <p className={"text-white text-sm lg:min-w-100"}>Nos pondremos en contacto contigo a la mayor brevedad</p>
          <form className="flex flex-col ">
            <Textfield id={"name"} htmlFor={"name"} label={"Nombre"} placeholder={"Nombre"}/>
            <Textfield id={"email"} htmlFor={"email"} label={"Correo Electronico"} placeholder={"Correo"}/>
            <div className="my-3 w-full ">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="consultType">
                Tipo de consulta
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[0]}
                isClearable={true}
                name="consultType"
                options={options}
              />
            </div>
            <Textfield id={"asunto"} htmlFor={"asunto"} label={"Asunto"} placeholder={"Asunto"}/>
              <label className="block text-white text-sm font-bold mb-2" htmlFor={"Mensaje"}>
                Mensaje
              </label>
              <textarea rows={4} className="resize-y rounded-md w-full"></textarea>
            <button
              className=" mt-8 bg-primary self-center md:self-end text-white font-bold py-2 px-4 w-28 rounded-xl focus:outline-none focus:shadow-outline"
              type="button">
              Enviar
            </button>
          </form>
        </div>
        <div className={"flex flex-col items-center lg:w-1/3"}>
          <div>
          <p className={"text-white text-lg "}>Datos contacto</p>
          <p className={"text-white"}>Calle Tijarafe, 23 <br/>
            Polígono Industrial Los Majuelos<br/>
            La Laguna<br/>
            Tenerife – 38108<br/>
            <a href="tel:+34922616266" className=" text-blue " > Tel. +34 922 616 266</a>
          </p>
          </div>
        </div>
      </div>

    </div>
  </Layout>
}

export default Contacto
