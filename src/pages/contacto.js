import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useEffect } from "react"
import Textfield from "../components/textfield"
import { sendForm } from 'emailjs-com';

const Contacto = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm('service_5ni2s9g', 'template_6s6mzxs',e.target, 'user_YDv5zGCwr1Qiup5NZ5bCq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

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
          <form className="flex flex-col" onSubmit={sendEmail}>
            <Textfield id={"name"} htmlFor={"name"} label={"Nombre"} placeholder={"Nombre"}/>
            <Textfield id={"email"} htmlFor={"email"} label={"Correo Electronico"} placeholder={"Correo"}/>
            <div className="my-3 w-full ">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="consultType">
                Tipo de consulta
              </label>
              <select className="shadow appearance-none border border-primary rounded w-full py-2 px-1 leading-tight focus:outline-none focus:shadow-outline" id="consultType">
                <option className="prueba">Comercial</option>
                <option className="prueba">Técnico</option>
              </select>
            </div>

            <Textfield id={"asunto"} htmlFor={"subject"} label={"Asunto"} placeholder={"Asunto"}/>
              <label className="block text-white text-sm font-bold mb-2" >
                Mensaje
              </label>
              <textarea name="message" rows={4} className="resize-y rounded-md w-full"></textarea>
            <button
              className=" mt-8 bg-primary self-center md:self-end text-white font-bold py-2 px-4 w-28 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit">
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
