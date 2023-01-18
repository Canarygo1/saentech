import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecondSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (<div className={'flex flex-row '} >
    <div className={'flex flex-col '}  data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="2000">
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
      <p className={'pt-20 vertical-text pl-10 '} >SAENTECH</p>
    </div>

  <div id='second-section' className="max-w-full text-center text-white text-7xl mt-10 second-bg">
    <span className="leading-snug md:leading-normal ">Más de 15 años de experiencia</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={'mx-16 md:mx-4 '} data-aos="fade-up" >
      <StaticImage className={'mb-8'} src={'./../../images/lineatemporal.png'}
                   width={600}
                   quality={100}
      />
      <p className={'leading-8 text-left text-lg md:mx-96'} >
        SaEn Tech nace en 2007 de la ilusión de un grupo de profesionales con más de 15 años en el sector tecnológico y
        unidos para dar el mejor servicio que merece el cliente, al mejor precio,
        empresa creada con personal y capital 100 % canario.
        <br />
        Disponemos de unas instalaciones de más de 500 metros cuadrados donde están invitados a comprobar todo nuestro
        portfolio de productos que aquí les presentamos, así como demostrarles nuestro gran servicio de pre-venta,
        post-venta y servicio técnico profesional que disponemos.
      </p>
      <StaticImage className={'mb-12'} src={'./../../images/logo-st.png'}
                   width={80}
                   quality={100}
      />
      <div>
        <p className={'text-lg'}>Envíos a todas las islas</p>
        <StaticImage className={'mb-32'} src={'./../../images/islas.svg'}
                     width={600}
                     quality={100}
        />
      </div>
    </div>
    <span className="md:leading-normal">Nuestros beneficios</span>
    <Separator dataHeigth="50px" dataWidth="1px" />
    <div className={' mx-16 md:mx-40'} >
      <div className='mt-20 grid md:grid-col-12 lg:grid-cols-3 gap-12 ' >
        <div className="flex  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg boxes" data-aos="fade-right">
          <div className=" h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center  '} >
              <StaticImage
                src="./../../images/iconos_ventajas/rapido.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-2xl font-bold'}>Envíos 24/48h</p>
          </div>
        </div>
        <div className="flex bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	boxes" data-aos="fade-right">
          <div className="h-64 flex flex-col justify-between w-full ">
            <div className={'flex justify-center'}>
              <StaticImage
                src="./../../images/iconos_ventajas/online.png"
                width={180}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </div>
            <p className={'text-2xl  font-bold'}>Pedidos online</p>
          </div>
        </div>
        <div className="flex  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg boxes" data-aos="fade-right">
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
            <p className={'text-2xl  font-bold'}>Chat de soporte</p>
          </div>
        </div>
        <div
          className="flex mb-28 bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	boxes" data-aos="fade-left">
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
            <p className={'text-2xl font-bold leading-8'}>Atención Profesional al cliente</p>
          </div>
        </div>
        <div
          className="flex mb-28  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	boxes" data-aos="fade-left">
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
            <p className={'text-2xl  font-bold leading-8'}>Asesoramiento técnico y de ventas a tu empresa</p>
          </div>
        </div>
        <div
          className="flex mb-28  bg-white bg-opacity-20 backdrop-blur-md border-2 border-primary rounded drop-shadow-lg	boxes" data-aos="fade-left">
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
            <p className={'text-2xl font-bold leading-8'}>Servicio postventa efectivo</p>
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
            <p className={'text-lg'}>Juan Luis Sánchez</p>
            <p className={'text-md '}>Gerencia / Dpto. Compras</p>
            <button onClick={()=>window.open('mailto:juanluis@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
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
            <p className={'text-md '}>Gerencia / Dpto. Admin</p>
            <button onClick={()=>window.open('mailto:jose@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
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
            <p className={'text-md  '}>Dpto. Comercial</p>
            <button onClick={()=>window.open('mailto:martin@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>              Contactar
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
            <p className={'text-md  '}>Dpto. Técnico</p>
            <button onClick={()=>window.open('mailto:jesus@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>              Contactar
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
            <p className={'text-md  '}>Dpto. Comercial</p>
            <button onClick={()=>window.open('mailto:distribucion@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>              Contactar
            </button>
          </div>
        </div>
        <div className=" h-60 flex flex-col justify-between">
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
            <p className={'text-lg'}>Juan Tee Wu</p>
            <p className={'text-md  '}>Dpto. Técnico / SAT</p>
            <button onClick={()=>window.open('mailto:sat@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
              Contactar
            </button>
          </div>
        </div>
        <div className=" h-60 flex flex-col justify-between">
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
            <p className={'text-lg'}>Daniel Ruiz</p>
            <p className={'text-md  '}>Dpto. logistica</p>
            <button onClick={()=>window.open('mailto:logistica@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
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
            <p className={'text-md  '}>Dpto. Comercial</p>
            <button onClick={()=>window.open('mailto:alexis@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
              Contactar
            </button>
          </div>
        </div>
        <div className=" h-60 flex flex-col justify-between">
          <div>
            <StaticImage
              src="./../../images/fotos_empleados_saentech/empleado10.png"
              width={100}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
          </div>
          <div className={'flex flex-col justify-end items-start  '}>
          <p className={'text-lg'}>Carlos Rodriguez</p>
            <p className={'text-md  '}>Dpto. Comercial</p>
            <button onClick={()=>window.open('mailto:comercial@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
              Contactar
            </button>
          </div>
        </div>
        {/*<div className=" h-60 flex flex-col justify-between">*/}
        {/*  <div>*/}
        {/*    <StaticImage*/}
        {/*      src="./../../images/fotos_empleados_saentech/empleado11.png"*/}
        {/*      width={100}*/}
        {/*      quality={100}*/}
        {/*      formats={["auto", "webp", "avif"]}*/}
        {/*      alt="A logo"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className={'flex flex-col justify-end items-start  '}>*/}
        {/*  <p className={'text-lg'}>Nimrod Galán</p>*/}
        {/*    <p className={'text-md  '}>Dpto. logistica</p>*/}
        {/*    <button onClick={()=>window.open('mailto:comercial@saentech.es?subject=Contacto%20web')*/}
        {/*    } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>*/}
        {/*      Contactar*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className=" h-60 flex flex-col justify-between">
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
            <p className={'text-lg'}>Luis Rago Tovar</p>
            <p className={'text-md  '}>Dpto. Empresas</p>
            <button onClick={()=>window.open('mailto:empresas@saentech.es?subject=Contacto%20web')
            } className={'bg-transparent border-2 h-8 border-solid border-primary text-lg w-full'}>
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <p className={'vertical-text'}>15 años junto a tí</p>
  </div>)
}

export default SecondSection
