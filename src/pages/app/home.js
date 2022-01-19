import React from "react"
import AdminHeader from "../../components/header/adminHeader"
import PhotoCard from "../../components/header/photoCard"

function Home(props) {
  return (
    <AdminHeader>
      <div className={"text-blackFont"}>
        Inicio
        <div className="bg-black h-px rounded border mt-2"></div>
      </div>
      <div className="w-full h-96 bg-black rounded-lg border mt-8 bg-lightgrey">
        <div className="px-6 pt-4 h-full">
          <div className="flex flex-row items-center h-1/6">
            <a className={"text-lg text-blackFont"}>Galeria</a>
            <button className="bg-primary ml-3 text-white font-bold text-md px-2.5 py-1 rounded">
              Guardar
            </button>
          </div>
        <div className="flex flex-row h-5/6">
          <div className="w-2/3 h-auto grid grid-cols-2 gap-2">
            <PhotoCard photoUrl={""} ></PhotoCard>
            <PhotoCard photoUrl={""} ></PhotoCard>
            <PhotoCard photoUrl={""} ></PhotoCard>
            <PhotoCard photoUrl={""} ></PhotoCard>
          </div>
          <div className="bg-primary w-1/3 ">
            <a >asd</a>
          </div>
        </div>
        </div>
      </div>
    </AdminHeader>
  )
}

export default Home
