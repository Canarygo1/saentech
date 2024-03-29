import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import Textfield from "../components/textfield"

const options = [
  { value: "comercial", label: "Comercial" },
  { value: "tecnico", label: "Técnico" }
]

const Contacto = () => {
  const [loading, setLoading] = useState(false)
  const [body, setBody] = useState({
    tipo_consulta: "FORMULARIO DE CONTACTO",
    subject: "",
    mail_usuario: "",
    nombre: "",
    mensaje: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setBody({ ...body, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await fetch("https://www.saentech.com/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(body)
      })
      if (!response.ok) {
        setLoading(false)
        return
      }

    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  return <Layout>
    <Seo title="Contacto" />
    <div className={"mt-28 flex flex-col items-center"}>
      <div>
        <p className={"text-white text-xl font-bold "}>Datos de contacto</p>
      </div>
      <div className={"flex flex-col lg:flex-row w-3/4 "}>
        <div className={"basis-1/2 lg:w-2/3 flex flex-col"}>
          <p className={"text-white text-lg lg:min-w-100 h-1"}>¿En qué te podemos ayudar?</p>
          <p className={"text-white text-sm lg:min-w-100"}>Nos pondremos en contacto contigo a la mayor brevedad</p>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <Textfield label={"nombre"} placeholder={"Nombre"} name={"nombre"} onChange={handleChange} />
            <Textfield type="email" label={"Correo"} placeholder={"Correo"} required={true} name={"mail_usuario"}
                       onChange={(event) => handleChange(event)} />
            <label className="block text-white text-sm font-bold mb-2 my-3" htmlFor="comercial">
              Tipo de consulta
            </label>
            <div className="w-full flex ">
              <div className="flex items-center mx-4">
                <input
                  className="mr-2"
                  id="comercial"
                  name="comercial"
                  type="checkbox" />
                <label className="block text-white text-sm font-bold mb-2 pt-2" htmlFor="comercial">
                  Comercial
                </label>
              </div>
              <div className="flex items-center mx-4">
                <input
                  className="mr-2"
                  id="tecnico"
                  name="tecnico"
                  type="checkbox" />
                <label className="block text-white text-sm font-bold mb-2 pt-2" htmlFor="tecnico">
                  Técnico
                </label>
              </div>
            </div>
            <Textfield id={"subject"} htmlFor={"subject"} label={"Asunto"} required={true} placeholder={"Asunto"} name={"subject"}
                       onChange={handleChange} />
            <label className="block text-white text-sm font-bold mb-2" htmlFor={"subject"}>
              Mensaje
            </label>
            <textarea rows={4} className="resize-y rounded-md w-full" name={"mensaje"}
                      onChange={handleChange}></textarea>
            <div className={'flex mt-3 gap-1'}>
              <input required={true} type="checkbox" id="cbox2" value="second_checkbox"/>
              <label className={'text-white text-md'}>He leído y acepto la política de privacidad</label>
            </div>

            <button
              disabled={loading}
              className=" mt-8 bg-primary self-center md:self-end text-white font-bold py-2 px-4 w-28 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit">
              <div className={loading?'animate-pulse':''}>
                {loading===false ? 'Enviar' : 'Cargando'}
              </div>
            </button>
          </form>
        </div>
        <div className={"flex ml-8 flex-col items-center lg:w-1/3"}>
          <div>
              <p className={"text-white text-lg "}>Ubicación</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112288.03699021401!2d-16.377287720193138!3d28.419221981283595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cd3cf17975ad%3A0xc490929bf6b266a5!2sSAEN%20TECH%20CANARIAS%20S.L.!5e0!3m2!1ses!2ses!4v1643285501158!5m2!1ses!2ses"
              width="400" height="300" style={{ border: 0 }}
              allowFullScreen="" loading="lazy"></iframe>
            <p className={"text-white"}>Calle Tijarafe, 23 <br />
              Polígono Industrial Los Majuelos<br />
              La Laguna<br />
              Tenerife – 38108<br />
              <a href="tel:+34922616266" className=" text-blue "> Tel. +34 922 616 266</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </Layout>
}

export default Contacto
