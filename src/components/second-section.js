import * as React from "react"
import Separator from "./separator"

const SecondSection = () => (
  <div className="w-full text-center text-white text-7xl">
    Conviértete en distribuidor oficial.
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className="flex">
      <div className="image-distribuidor w-1/2">
      </div>
      <div>
        <div className="flex">
          <div className="icono-pedidos-online">
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl">Pedidos online</span>
            <div className='text-xl'>
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
