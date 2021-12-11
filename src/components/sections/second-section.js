import * as React from "react"
import Separator from "../separator"

const SecondSection = () => (
  <div className="w-full text-center text-white text-7xl mt-10">
    Conviértete en distribuidor oficial.
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className="flex distributor-section flex-wrap xl:justify-evenly flex-col-reverse xl:flex-row items-center">
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
          <div className="icon-background icono-soporte">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Soporte a tu dispocición</span>
            <div className='text-xl flex flex-col items-start mt-9'>
              <span>Ofrecemos ayuda y soporte en</span>
              <span>tiempo real a nuestros clientes vía</span>
              <span>chat. Horario de 9:00 a 18:00.</span>
            </div>
          </div>
        </div>
        <div className="flex mt-28">
          <div className="icon-background icono-envios">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Envios rapidos</span>
            <div className='text-xl flex flex-col items-start mt-9'>
              <span>Tendras tus productos en tu negocio</span>
              <span>al dia siguiente de hacer tu pedido,</span>
              <span>de forma rapida y segura.</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
)

export default SecondSection
