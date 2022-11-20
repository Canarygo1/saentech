import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"

const SecondSection = () => (

  <div id='second-section' className="max-w-full text-center text-white text-7xl mt-10 ">
    <span className="leading-snug md:leading-normal">Nuestros beneficios.</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={' mx-16 md:mx-40'}>
      <div className='mt-20 grid md:grid-col-12 lg:grid-cols-3 gap-12 '>
        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-60 flex flex-col justify-between w-full ">
          <div className={'flex justify-center  '}>
            <StaticImage
              src="./../../images/iconos_ventajas/rapido.png"
              width={200}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </div>
            <p className={'text-3xl font-bold'}>Envíos 24/48h</p>
          </div>
        </div>
        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-60 flex flex-col justify-between w-full ">
            <div className={'flex justify-center  '}>
              <StaticImage
                src="./../../images/iconos_ventajas/online.png"
                width={200}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold'}>Pedidos online</p>
          </div>
        </div>        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-60 flex flex-col justify-between w-full ">
            <div className={'flex justify-center  '}>
              <StaticImage
                src="./../../images/iconos_ventajas/soporte.png"
                width={200}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold'}>Chat de soporte</p>
          </div>
        </div>

      </div>
  </div>
    <span className="leading-snug md:leading-normal">Equipo a tu disposición</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={' mx-16 md:mx-40'}>
    <div className="grid grid-col-12 lg:grid-cols-5 gap-20 md:gap-8 ">
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado8.png"
            width={100}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Jose Manuel</p>
          <p className={'text-lg '}>Gerencia / Dpto. Compras</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado5.png"
            width={100}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Jose Manuel</p>
          <p className={'text-lg '}>Gerencia / Dpto. Admin</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado2.png"
            width={100}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Martín Ruiz</p>
          <p className={'text-lg '}>Dpto. Comercial</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado3.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Jesús Manuel</p>
          <p className={'text-lg '}>Dpto. Técnico</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado7.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Jorge Ravelo</p>
          <p className={'text-lg '}>Dpto. Comercial</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado4.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Luis Rago Tovar</p>
          <p className={'text-lg '}>Dpto. Empresas</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado6.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Juan Tee Tuu</p>
          <p className={'text-lg '}>Dpto. Técnico / SAT</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado1.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Dani Ruiz</p>
          <p className={'text-lg '}>Dpto. logistica</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>
      <div className=" h-60 flex flex-col justify-between">
        <div>
          <StaticImage
            src="./../../images/fotos_empleados_saentech/empleado.png"
            width={100}

            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
        <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Alexis Cruz</p>
          <p className={'text-lg '}>Dpto. Comercial</p>
          <button className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
            Contactar
          </button>
        </div>
      </div>

      </div>
    </div>

  </div>
)

export default SecondSection
