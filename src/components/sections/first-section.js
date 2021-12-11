import * as React from "react"
import Separator from "../separator"

const FirstSection = () => (
  <div className="first-section w-full text-white flex items-end xl:items-start justify-center xl:justify-start h-100 xl:h-110">
    <div className='w-auto flex flex-col content-first-section fit-content hidden xl:flex'>
      <Separator dataHeigth="270px" dataWidth="1px"/>
      <span className='my-2'>
        Lanza tu negocio con los
      </span>
      <span className='my-4'>
        mejores productos
      </span>
      <span className="text-white text-xl my-5">
        Para todo el mundo desde pequenos hasta grandes clientes
      </span>
      <div className='flex text-lg'>
        <div className='bg-primary rounded-full text-black py-1 px-4 mx-3'>
          Contáctanos
        </div>
        <div className='bg-white rounded-full text-black py-1 px-4 mx-3'>
          Nuestras Ventajas
        </div>
      </div>
    </div>
    <div className='w-1/2 bg-primary rounded-2xl text-black py-3 px-4 flex xl:hidden justify-center fixed bottom-4'>
      Contáctanos
    </div>
  </div>
)

export default FirstSection
