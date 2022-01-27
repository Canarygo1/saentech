import React from "react"
import AdminHeader from "../../components/header/adminHeader"

function Profile(props) {
  return (
    <AdminHeader>

    <div className={"text-blackFont"}>
      Mi perfil
      <div className="bg-black h-px rounded border mt-2"></div>
    </div>
  <div className="w-full h-100 bg-black rounded-lg border mt-8 bg-lightgrey">
    <div className=" ml-4 my-8 w-2/4">

    <div className="flex flex-row items-center text-md justify-around mt-2 text-blackFont ">
      <a>Opciones de pago</a>
      <button className="bg-primary rounded rounded-md text-white  text-md p-2">Última factura</button>
      <button className="bg-primary rounded rounded-md text-white  text-md p-2">Cambiar metodo de pago</button>
    </div>
    </div>
    <div className="px-6 pt-4 min-h-full h-auto mb-6">
      <div  className="w-96 h-96 bg-white border rounded-lg flex flex-col">
        <div className={"text-md underline text-error  flex  flex-row justify-center"}>
          <p>Mes en curso</p>
        </div>
        <div className=" flex flex-row">
          <div className={"ml-3"}>
            <div className="h-12 w-12 rounded-full bg-primary flex fle items-center justify-center">
              <a className="font-bold text-2xl text">S</a>
            </div>
          </div>
          <div className="w-full ml-4  h-12 flex flex-col content-evenly text-black">
            <a className="font-bold text-lg text">Saentech</a>
            <a className="underline text-sm">Cod: #123456</a>
          </div>
          <div className="border-primary text-primary w-56 flex flex items-center justify-center border rounded-md mr-6">
            #Enero
          </div>
        </div>
        <div className="w-full bg-blackFont h-0.5 my-6"></div>
        <div className="flex flex-col text-blackFont text-md ml-8">
          <p>Costes servidor: <strong>0€</strong></p>
          <p>Horas de mantenimiento: <strong>12 </strong></p>
          <p>Precio hora: <strong>30€ </strong></p>
          <div className="self-end ">
            <p className=" mr-12 text-xl">Total : 0€ <strong></strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </AdminHeader>

  )
}

export default Profile
