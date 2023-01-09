import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const FifthSection = () => (
  <div className="w-full text-white text-7xl justify-center items-center flex-col py-24 flex justify-evenly flex-wrap px-10">
    <p className="my-3 leading-none">
      ¿Quieres comprar nuestros productos?
    </p>
    <p className="my-3 leading-none text-lg">
      Date de alta con nosotros en 3 sencillos pasos
    </p>
    <div className={' grid md:grid-col-12 lg:grid-cols-3 gap-12'}>
      <div className={'flex-col'}>
      <div className={'flex justify-center'} >
        <StaticImage
          src="./../../images/iconos_alta/operador.png"
          width={180}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
      </div>
      <p className={'text-3xl font-bold text-center'}>Paso 1</p>
      <p className={'text-lg text-center max-w-xs'}>
        Facilítanos tus datos en el siguiente botón o vía chat y uno de nuestros comerciales se pondrá en contacto contigo
      </p>
        <div className="flex text-lg items-start mt-4">
          <Link className={'bg-primary rounded-lg text-black py-2 px-28 text-white'} to={"contacto"}>Darse de alta</Link>
        </div>
      </div>
      <div className={'flex-col'}>
      <div className={'flex justify-center'} >
        <StaticImage
          src="./../../images/iconos_alta/lista.png"
          width={180}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
      </div>
      <p className={'text-3xl font-bold text-center'}>Paso 2</p>
      <p className={'text-lg text-center max-w-xs'}>
        Rellena nuestro formulario con tus datos
      </p>
      </div>
      <div className={'flex-col'}>
      <div className={'flex justify-center'} >
        <StaticImage
          src="./../../images/iconos_alta/check.png"
          width={180}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
      </div>
      <p className={'text-3xl font-bold text-center'}>Paso 3</p>
      <p className={'text-lg text-center max-w-xs'}>
        Confirmado ya puedes acceder a nuestra área de clientes      </p>
      </div>

    </div>
  </div>
)

export default FifthSection
