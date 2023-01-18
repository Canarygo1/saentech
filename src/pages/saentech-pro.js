import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect } from "react"
import AOS from "aos"

const SaentechProPage = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return <Layout>

    <Seo title="Saentech Pro" />
    <div className={"w-full h-full flex flex-col items-center"}>
      <div className={"bgPro flex flex-col m-0 p-0 items-center text-center text-white"}>
        <h1 data-aos="zoom-in-up"  className={"text-3xl font-extrabold  leading-relaxed p-0 m-0 mt-6 "}>CONOCE NUESTRA PARTE
          MÁS <br /><span className={"bg-primary px-4 text-4xl"}>PRO</span></h1>
        <h2 data-aos="zoom-in-up" className={"text-xl font-medium m-0 mt-2 "}>Descubre los cuatro servicios en los que podemos ayudarte</h2>
        <h2 data-aos="zoom-in-up"  className={"text-md font-bold mt-5"}>Redes y seguridad | Software | Audiovisuales | Mantenimiento</h2>
      </div>
      <div className={"flex  flex-col w-full h-full"}>
        <div className={"flex w-11/12  m-0 p-0 flex-row mt-10 gap-16 "}>
          <div className={"w-1/2 flex justify-end m-0 p-0"}>
            <StaticImage className={"w-2/3"}
                         objectFit={"cover"}
                         quality={100}
                         formats={["auto", "webp", "avif"]}
                         src={"./../images/fotos_pro/photo1.png"} alt={"Software"} />
          </div>
          <div className={" w-1/2 flex flex-col justify-center items-start text-white "}>
            <div className={"flex flex-col gap-2"}>
              <h1>Software, programación a medida y desarrollo web</h1>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Soluciones de Software vertical y horizontal a medida</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Programación a medida de software y aplicaciones móviles</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Desarrollo web básico y empresarial</text>
              </div>
            </div>
          </div>
        </div>
        <div className={"bgBasicPro  m-0 p-0"}></div>
      </div>
      <div className={"flex  flex-col w-full h-full"}>
        <div className={"flex w-11/12  m-0 p-0 flex-row-reverse mt-10 gap-16"}>
          <div className={"w-1/3 flex justify-start m-0 p-0"}>
            <StaticImage className={"w-11/12 "}
                         objectFit={"fill"}
                         quality={100}
                         formats={["auto", "webp", "avif"]}
                         src={"./../images/fotos_pro/photo-2.png"} alt={"Software"} />
          </div>
          <div className={" w-2/3 flex flex-col justify-center items-end  text-white "}>
            <div className={"flex flex-col w-3/4 gap-2 "}>
              <h1>EQUIPAMIENTO, AUDIOVISUALES, TPV E INSTALACIONES</h1>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"fill"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Equipos informáticos, servidores, ordenadores, portátiles, etc...</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={80}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Impresoras multifunción de pequeño, mediano y gran formato</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Instalación y montaje de sistemas y equipamiento para oficinas avanzadas</text>
              </div>
            </div>
          </div>
        </div>
        <div className={"bgBasicPro  m-0 p-0"}></div>
      </div>
      <div className={"flex  flex-col w-full h-full"}>
        <div className={"flex w-11/12  m-0 p-0 flex-row mt-10 gap-16 "}>
          <div className={"w-1/2 flex justify-end m-0 p-0"}>
            <StaticImage className={"w-2/3"}
                         objectFit={"cover"}
                         quality={100}
                         formats={["auto", "webp", "avif"]}
                         src={"./../images/fotos_pro/photo-3.png"} alt={"Software"} />
          </div>
          <div className={" w-1/2 flex flex-col justify-center items-start text-white "}>
            <div className={"flex flex-col gap-2"}>
              <h1>Consulting, soporte técnico y mantenimiento</h1>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={" max-w-4 max-h-6 w-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Asesoramiento a pequeñas y grandes empresas en la adaptación de sus entornos de trabajo a las nuevas tecnologías</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Soporte técnico informático presencial y remoto.</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Mantenimiento de sistemas y redes para empresas y profesionales</text>
              </div>
            </div>
          </div>
        </div>
        <div className={"bgBasicPro  m-0 p-0"}></div>
      </div>

      <div className={"flex  flex-col w-full h-full"}>
        <div className={"flex w-11/12  m-0 p-0 flex-row-reverse mt-10 gap-16"}>
          <div className={"w-1/3 flex justify-start m-0 p-0"}>
            <StaticImage className={"w-11/12 "}
                         objectFit={"fill"}
                         quality={100}
                         formats={["auto", "webp", "avif"]}
                         src={"./../images/fotos_pro/photo-4.png"} alt={"Software"} />
          </div>
          <div className={" w-2/3 flex flex-col justify-center items-end  text-white "}>
            <div className={"flex flex-col w-3/4 gap-2 "}>
              <h1>Redes y seguridad</h1>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"fill"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Cableado e instalación de redes locales e inalámbricas</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={80}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Instalación de equipos para infraestructuras de red de pequeño y gran formato</text>
              </div>
              <div className={"flex flex-row  w-auto items-center gap-2"}>
                <StaticImage className={"max-w-4 max-h-6"}
                             objectFit={"cover"}
                             quality={100}
                             formats={["auto", "webp", "avif"]}
                             src={"./../images/fotos_pro/icon-check.png"} alt={"Software"} />
                <text>Instalaciones de sistemas de seguridad CCTV, controles de acceso, control laboral</text>
              </div>
            </div>
          </div>
        </div>
        <div className={"bgPro  m-0 p-0"}></div>
      </div>
      <div  id='download' className={' flex mt-20 flex-col text-white justify-center items-center w-screen pb-20'}>
        <h1>Área de descarga de software</h1>
        <div className={'flex flex-row gap-6'}>
          <a href={'https://anydesk.com/es/downloads/thank-you?dv=win_exe'} className={'w-80 h-20  bg-white flex justify-center items-center rounded-lg'}>
              <StaticImage
                className={'w-1/2'}
                objectFit={'cover'}
                src={'./../images/fotos_pro/anydesk.png'} alt={'anydesk'}/>
            </a>
          <a href={'https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe'} className={'w-80 h-20  bg-white flex justify-center items-center rounded-lg'}>
              <StaticImage
                className={'w-1/2'}
                objectFit={'cover'}
                src={'./../images/fotos_pro/teamviewer.png'} alt={'anydesk'}/>
            </a>
          <a href={'https://www.nanosystems.it/public/download/Supremo.exe'} className={'w-80 h-20  bg-white flex justify-center items-center rounded-lg'}>
              <StaticImage
                className={'w-1/2'}
                objectFit={'cover'}
                src={'./../images/fotos_pro/supremo.png'} alt={'anydesk'}/>
            </a>
        </div>
        <div className={"bgBasicPro  m-0 p-0"}></div>
      </div>
    </div>
  </Layout>
}


export default SaentechProPage
