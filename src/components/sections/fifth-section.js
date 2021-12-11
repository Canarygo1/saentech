import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FifthSection = () => (
  <div className="w-full text-white text-7xl bg-primary py-24 flex justify-evenly flex-wrap px-10">
    <div className='flex flex-col py-5'>
      <span className="my-3">
        ¿Listo para formar parte
      </span>
      <span className='my-3 '>
        de Saentech?
      </span>
    </div>
    <div className='self-center py-5'>
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
    </div>
  </div>
)

export default FifthSection
