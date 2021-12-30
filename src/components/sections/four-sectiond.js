import * as React from "react"
import Separator from "../separator"
import { StaticImage } from "gatsby-plugin-image"

const FourSection = () => (
  <div className="w-full flex flex-col text-center text-white text-7xl bg-opacity-10 py-14">
    <span className="leading-snug md:leading-normal">Opiniones de nuestros clientes</span>
      <Separator dataHeigth="50px" dataWidth="1px" />
      <div className='flex items-center flex-wrap justify-evenly'>
          <div className='rounded-lg border-2 border-secondary card-opiniones p-9 mb-10 xl:mb-0 flex flex-col items-center'>
            <span className='text-xl text-left'>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</span>
            <StaticImage
              src="./../../images/opinion-1.png"
              width={63}
              quality={100}
              className='shadow rounded-full max-w-full h-auto align-middle border-none fit-content mt-10'
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
            <span className='text-2xl mt-6'>Happy User</span>
            <span className='text-xl mt-2'>tempy.club</span>
          </div>
          <div className='rounded-lg border-2 border-secondary card-opiniones p-9 mb-10 xl:mb-0 flex flex-col items-center'>
            <span className='text-xl text-left'> Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!</span>
            <StaticImage
              src="./../../images/opinion-2.png"
              width={63}
              quality={100}
              className='shadow rounded-full max-w-full h-auto align-middle border-none fit-content mt-10'
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
            <span className='text-2xl mt-6'>Happy User</span>
            <span className='text-xl mt-2'>tempy.club</span>
          </div>
          <div className='rounded-lg border-2 border-secondary card-opiniones p-9 flex mb-10 xl:mb-0 flex-col items-center'>
            <span className='text-xl text-left'>Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user.</span>
            <StaticImage
              src="./../../images/opinion-3.png"
              width={63}
              quality={100}
              className='shadow rounded-full max-w-full h-auto align-middle border-none fit-content mt-10'
              formats={["auto", "webp", "avif"]}
              alt="A logo"
            />
            <span className='text-2xl mt-6'>Happy User</span>
            <span className='text-xl mt-2'>tempy.club</span>
          </div>
      </div>
  </div>
)

export default FourSection
