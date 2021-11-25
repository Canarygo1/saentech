import * as React from "react"
import Separator from "../separator"

const SecondSection = () => (
  <div className="w-full text-center text-white text-7xl hidden md:block">
    Conviértete en distribuidor oficial.
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className="flex distributor-section flex-wrap justify-evenly">
      <div className="image-distribuidor mt-1" />
      <div className='mt-20'>
        <div className="flex mb-28">
          <div className="icon-background icono-pedidos-online">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Pedidos online</span>
            <div className='text-xl flex flex-col items-start mt-9'>
              <span>Las 24 horas los 365 días del año.</span>
              <span>La forma más fácil y rápida de hacer</span>
              <span>tu Pedido.</span>
            </div>
        </div>
        </div>
        <div className="flex my-28">
          <div className="icon-background icono-pedidos-online">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Pedidos online</span>
            <div className='text-xl flex flex-col items-start mt-9'>
              <span>Las 24 horas los 365 días del año.</span>
              <span>La forma más fácil y rápida de hacer</span>
              <span>tu Pedido.</span>
            </div>
          </div>
        </div>
        <div className="flex mt-28">
          <div className="icon-background icono-pedidos-online">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Pedidos online</span>
            <div className='text-xl flex flex-col items-start mt-9'>
              <span>Las 24 horas los 365 días del año.</span>
              <span>La forma más fácil y rápida de hacer</span>
              <span>tu Pedido.</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
)

export default SecondSection
