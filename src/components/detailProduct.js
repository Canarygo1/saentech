import React, { useEffect, useRef } from "react"
import Textfield from "./textfield"
import Modal from 'react-modal';
import CardProductImage from "./CardProductImage"
import { StaticImage } from "gatsby-plugin-image"

function DetailProduct({ product, onClose}) {
  return (
    <Modal
      overlayClassName="Overlay"
      isOpen={true} onRequestClose={()=>onClose()}
      className=" Modal bg-white opacity-100 w-11/12 h-2/3 lg:w-1/2 px-3 pt-4
      rounded-lg text-black bg-white fixed inset-x-0
      my-auto border  rounded mx-auto inset-y-0 object-center
      object-center">
      <div className={"w-full text-right"} >
        <StaticImage onClick={() => onClose()} className={"w-9 h-9 text-right close-icon"} src="../images/close.png" alt="close" />
      </div>
      <div className={"flex flex-col lg:flex-row h-full justify-center"}>
        <div className=" h-2/3 lg:w-1/2 lg:h-full flex  lg:text-center lg:justify-center flex-col items-center">
          <CardProductImage  url={product.Imagen} classValue={"card-detail"} />
          <div className="flex h-1/3 flex-col mt-2">
            <div>
              <p className="text-md m-0 p-0 font-bold">Nombre Producto</p>
              <p className="text-md m-0 p-0 line-clamp-1">{product.NombreCorto}</p>
            </div>
            <div>
              <p className="text-md m-0 p-0 font-bold">Código Producto</p>
              <p className="text-md m-0 p-0">{product.Id}</p>
            </div>
          </div>
        </div>
        <div className=" h-1/3 lg:w-1/2 lg:h-1/2 lg:h-full  flex flex-col items-center justify-center">
          <div className="h-2/3 text-md lg:flex lg:flex-col lg:justify-end">
            <p className="m-0 p-0 text-center">¿Quieres más información?</p>
            <p className="m-0 p-0 text-center">Facilitanos tus datos y nos pondremos en contacto contigo</p>
            <form>
              <Textfield id={"email"} placeholder={"Email"} label={"Email"} htmlFor={"email"}></Textfield>
            </form>
          </div>
          <div className="h-1/3 mt-2 lg:mt-0 lg:h-1/2 lg:flex lg:flex-col justify-start">
            <button className="text-lg bg-primary px-4 py-2 border rounded-lg border-primary " onClick={()=>onClose()}>Enviar</button>
          </div>
        </div>
      </div>

    </Modal>
  )
}

export default DetailProduct
