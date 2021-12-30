import * as React from "react"

const ThirdSection = () => (
  <div className="w-full flex flex-col text-center text-white text-7xl bg-blue bg-opacity-10 pt-14">
    <span className="leading-snug md:leading-normal mx-3 md:mx-0">Miles de productos al alcance de tu mano</span>
      <div className='mt-10 text-2xl flex flex-col'>
            <span>Disponemos de mas de 500 metros cuadrados de almacen</span>
            <span>Tenemos productos de ultima genereacion</span>
      </div>
      <div className='self-center bg-primary rounded-full fit-content text-lg py-1 px-4 mx-3 mt-10'>
            Conócenos
      </div>
        <div className='flex flex-wrap section-products '>
          <div className='flex flex-col mr-6'>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
          </div>
          <div className='flex flex-col mr-6 mt-28'>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
          </div>
          <div className='flex flex-col mr-6 mt-36'>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
          </div>
          <div className='flex flex-col mr-6 mt-44'>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
          </div>
          <div className='flex flex-col mt-24'>
            <div className='card bg-secondary mt-6'></div>
            <div className='card bg-secondary mt-6'></div>
          </div>
        </div>
</div>
)

export default ThirdSection
