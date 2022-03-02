import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "../../../.cache/gatsby-browser-entry"

const FifthSection = () => (
  <div className="w-full text-white text-7xl bg-primary py-24 flex justify-evenly flex-wrap px-10">
    <div className='flex flex-col py-5'>
      <p className="my-3 leading-none">
        ¿Listo para formar parte <br/> de Saentech ?
      </p>
    </div>
    <Link to={"contacto"} className='self-center py-5'>
      <div className="bg-white rounded-full px-8 py-3 text-darkBlue text-xl">
        <StaticImage
          src="./../../images/iconoEmail.png"
          width={30}
          quality={100}
          className='mr-5'
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
        <span>Contáctanos</span>
      </div>
    </Link>
  </div>
)

export default FifthSection
