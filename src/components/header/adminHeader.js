import React from "react"

function AdminHeader({ children }) {
  return (
    <div className="relative min-h-screen md:flex text-white ">
      <div className="text-gray-100 flex justify-between bg-primary md:hidden">
        <a href="#" className="block p-4 text-white font-bold">Panel Administración</a>
        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div
        className="sidebar bg-primary flex flex-col w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <span className="text-2xl font-extrabold">Saentech</span>
        </a>
        <nav>
          <a href="#" className="block py-2.5 px-4 hover:bg-white  rounded transition duration-200 hover:bg-blue-700 hover:text-black">
            Inicio
          </a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Estadisticas
          </a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Mi perfil
          </a>
        </nav>
        <a href="" className="w-full h-24 bg-white border rounded-lg flex items-center">
          <div className={"ml-3"}>
            <div className="h-12 w-12 rounded-full bg-primary flex flex-col items-center justify-center">
              <a className="font-bold text-2xl text">S</a>
            </div>
          </div>
          <div className="w-full ml-4  h-12 flex flex-col content-evenly text-black">
              <a className="font-bold text-lg text">Saentech</a>
              <a className="underline text-sm">Cod: #123456</a>
          </div>
          <div className="w-24">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/>
            </svg>
          </div>
        </a>
      </div>
      <div className="flex-1 p-10 text-2xl min-h-screen font-bold bg-white">
        {children}
      </div>
    </div>
  )
}

export default AdminHeader