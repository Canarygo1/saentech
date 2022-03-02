import * as React from "react"
import Separator from "../separator"

const SecondSection = () => (
  <div id="second-section" className="max-w-full text-center text-white text-7xl mt-10 ">
    <span className="leading-snug md:leading-normal">Conviértete en distribuidor oficial.</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className="flex distributor-section items-start flex-wrap xl:justify-evenly flex-col-reverse xl:flex-row md:items-center ">
      <div className="md:h-96 md:w-96 image-distribuidor mt-1"/>
      <div className='mt-20 '>
        <div className="flex mb-28 ">
          <div className="icon-background icono-pedidos-online">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Pedidos online</span>
            <div className='text-xl flex flex-col items-start justify-start mt-9'>
              <span className={'md:inline-block text-left '}>Las 24 horas los 365 días del año.<br/>
              La forma más fácil y rápida de <br/> hacer tu pedido.</span>
            </div>
        </div>
        </div>
        <div className="flex my-28">
          <div className="icon-background icono-soporte">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Soporte a tu disposición</span>
            <div className='text-xl flex flex-col items-start mt-9 text-left'>
              <span>Ofrecemos ayuda y soporte en</span>
              <span>tiempo real a nuestros clientes vía</span>
              <span>chat. Horario de 8:30 a 18:00.</span>
            </div>
          </div>
        </div>
        <div className="flex mt-28">
          <div className="icon-background icono-envios">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Envíos rápidos</span>
            <div className='text-xl flex flex-col items-start mt-9 text-left'>
              <span>Tendrás tus productos en tu negocio</span>
              <span>al dia siguiente de hacer tu pedido,</span>
              <span>de forma rápida y segura.</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
)

export default SecondSection
