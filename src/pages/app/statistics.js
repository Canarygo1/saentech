import React from "react"
import AdminHeader from "../../components/header/adminHeader"
import { Link } from "gatsby"

function Statistics(props) {
  return (
    <AdminHeader>
      <div className={"text-blackFont"}>
        Inicio
        <div className="bg-black h-px rounded border mt-2"></div>
      </div>
      <div className="w-full h-100 bg-black rounded-lg border mt-8 bg-lightgrey">
        <div className="px-6 pt-4 min-h-full h-auto mb-6 ">
          <div className="flex flex-row items-center h-1/6">
            <a className={"text-lg text-blackFont"}>Informe estadisticas</a>
          </div>
          <p className="text-sm text-blackFont">Aquí puedes encontrar las estadisticas de tu página web</p>
          <p className="text-md text-blackFont">Link de Google Analytics:
            <Link to={"https://analytics.google.com/analytics/web/?authuser=0#/p298175786/reports/dashboard?r=firebase-overview"} target="_blank"
                  className="underline py-1 px-4 mx-2">
              https://analytics.google.com/analytics/web/?authuser=0#/p298175786/reports/dashboard?r=firebase-overview
            </Link>
          </p>
          <button className="text-blackFont bg-white text-md p-2 border-white rounded ">Descargar informe</button>
        </div>
      </div>
    </AdminHeader>
  )
}

export default Statistics
