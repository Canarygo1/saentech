import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"

const SecondSection = () => (

  <div id='second-section' className="max-w-full text-center text-white text-7xl mt-10 ">
    <span className="leading-snug md:leading-normal">Más de 15 años de experiencia</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={'mx-16 md:mx-4'}>
      <StaticImage className={'mb-8'} src={'./../../images/lineatemporal.png'}
                   width={600}
                   quality={100}
      />
      <p className={'leading-8 text-left text-lg md:mx-96'}>
        SaEn Tech nace en 2007 de la ilusión de un grupo de profesionales con más de 15 años en el sector tecnológico y
        unidos para dar el mejor servicio que merece el cliente, al mejor precio,
        empresa creada con personal y capital 100 % canario.
        <br />
        Disponemos de unas instalaciones de más de 500 metros cuadrados donde están invitados a comprobar todo nuestro
        portfolio de productos que aquí les presentamos, así como demostrarles nuestro gran servicio de pre-venta,
        post-venta y servicio técnico profesional que disponemos.
      </p>
      <StaticImage className={'mb-16'} src={'./../../images/logo-st.png'}
                   width={80}
                   quality={100}
      />
    </div>
    <span className="md:leading-normal ">Nuestros beneficios</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={' mx-16 md:mx-40'}>
      <div className='mt-20 grid md:grid-col-12 lg:grid-cols-3 gap-12 '>
        <div className="flex  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
          <div className={'flex justify-center  '}>
            <StaticImage
              src="./../../images/iconos_ventajas/rapido.png"
              width={180}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </div>
            <p className={'text-3xl font-bold'}>Envíos 24/48h</p>
          </div>
        </div>
        <div className="flex bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/online.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold'}>Pedidos online</p>
          </div>
        </div>
        <div className="flex  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/soporte.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold'}>Chat de soporte</p>
          </div>
        </div>
        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/operador.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold leading-8'}>Atención Profesional al cliente</p>
          </div>
        </div>
        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/etiqueta.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold leading-8'}>Asesoramiento técnico y de ventas a tu empresa</p>
          </div>
        </div>
        <div className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	"  >
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/telefono.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-3xl font-bold leading-8'}>Servicio postventa efectivo</p>
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
          <p className={'text-lg'}>Juan Luis Sanchez</p>
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
          <p className={'text-lg'}>Jose Manuel Encinoso</p>
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
          <p className={'text-lg'}>Jesus Manuel Sieira</p>
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
          <p className={'text-lg'}>Juan Tee Wu</p>
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
