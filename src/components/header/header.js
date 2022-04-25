import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"

export default function Header() {

  function menuFunction() {
    let bar = document.querySelector(".bar")
    let menu = document.querySelector(".js-menu-content")
    if (bar.classList.contains("animate")) {
      menu.classList.toggle("hide-menu")
      menu.classList.toggle("show-menu")
    } else {
      menu.classList.toggle("show-menu")
      menu.classList.toggle("hide-menu")
    }
    bar.classList.toggle("animate")
  }

  function closeMenu() {
    let menu = document.querySelector(".js-menu-content")
    if (menu) {
      menu.classList.add("hidden")
    }
  }

  return (
    <header className="text-white flex flex-col">
      <Link to={"/subvenciones"} className={"self-center hidden w-1/2 xl:flex items-center justify-evenly"}>
        <div className={"mt-2 rounded-lg border-primary border"}>
         <span className=" text-primary text-lg mx-2">
          Horario de L-J: 08:30 - 18:00 V: 08:30 - 15:00
        </span>
        </div>
        <div className={"mt-2 animate-pulse"}>
         <span className="text-error text-lg mx-2">
          ¡ACCEDE A TU SUBVENCIÓN!
        </span>
        </div>
      </Link>
      <div
        className="hidden xl:flex xl:flex-wrap xl:items-center xl:justify-between xl:justify-around xl:py-2 xl:px-5 xl:px-0">
        <Link to={"/"}>
          <StaticImage
            src="./../../images/logo.png"
            width={80}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </Link>

        <div className="hidden md:block">
          <Link to="/"><span className="text-lg mx-6">
        Inicio
          </span></Link>
          <Link to={"/#third"}>
          <span className="text-lg mx-6 ">
        Conócenos
      </span>
          </Link>
          <Link to="/catalogo">
          <span className="text-lg mx-6">
        Catálogo
      </span>
          </Link>
          <Link to="/saentech-pro">
          <span className="text-lg mx-6">
        Saentech Pro
      </span>
          </Link>
          <Link to="/contacto">

          <span className="text-lg mx-6">
        Contacto
      </span>
          </Link>

        </div>

        <div className="hidden md:flex items-center">
          <div className={"flex flex-row mr-5"}>
            <Link to={"https://www.instagram.com/saen.tech"} target="_self" className={"px-3"}>
              <StaticImage
                src="./../../images/instagram-logo.png"
                width={30}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </Link>
            <Link to={"https://twitter.com/saentech_can"} target="_self" className={"px-3"}>
              <StaticImage
                src="./../../images/twitter-sign.png"
                width={30}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </Link>
            <Link to={"https://www.facebook.com/saentech"} target="_self" className={"px-3"}>
              <StaticImage
                src="./../../images/facebook.png"
                width={30}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </Link>
          </div>
          <div className="border-2 border-primary rounded-full text-black w-24 h-10 flex flex-row">
            <a href="https://goo.gl/maps/ascJ6JSLR8sDrFef6"
               className="h-full w-1/2 bg-primary border-l-2 rounded-l-full border-primary flex items-center justify-center">
              <StaticImage
                src="./../../images/pin.png"
                width={24}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </a>
            <a href="tel:+34922616266"
               className="h-full w-1/2  border-l-2 rounded-r-full border-primary flex items-center justify-center">
              <StaticImage
                src="./../../images/phone-call.png"
                width={24}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A logo"
              />
            </a>
          </div>
          <Link to={"http://pedidos.saentech.com/ogonlineapp/login/"} target="_blank"
                className="bg-transparent border-2 border-solid border-primary rounded-full h-10 pt-1 px-4 mx-2">
            Acceso Clientes
          </Link>
        </div>
        <div className="block md:hidden">
          <StaticImage
            src="./../../images/menu.png"
            width={63}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </div>
      </div>
      <div
        className="xl:hidden block items-center justify-between fixed top-0 left-0 bg-black pb-2 header-scroll">
        <div className={"mt-2 mx-4 rounded-lg block xl:hidden text-center border-primary border"}>
         <span className=" text-primary text-lg mx-2">
          Horario de L-J: 08:30 - 18:00 V: 08:30 - 15:00
        </span>
        </div>
        <div className="w-screen justify-between flex mt-2">
          <StaticImage
            className="ml-3"
            src="./../../images/logo.png"
            width={63}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
          <div className="hamburger-menu menu mr-3" onClick={menuFunction}>
            <div className="bar " />
          </div>
          <div className={"bg-white flex flex-col hide-menu menu-content z-10 js-menu-content"}>
            <a href="#" className="close close-js" onClick={closeMenu} />
            <div className="w-full text-black flex flex flex-col text-center items-center text-2xl mt-20">
              <Link to="/" className="my-3"><span
                className="py-3 w-full mx-6">Inicio</span></Link>
              <Link to="/#third" className="my-3"><span
                className="py-3 w-full mx-6">Conocenos</span></Link>
              <Link to="/catalogo" className="my-3"><span
                className="py-3 w-full mx-6">Catalogos</span></Link>
              <Link to="/saentech-pro" className="my-3"><span
                className="py-3 w-full mx-6">Saentech Pro</span></Link>
              <Link to="/contacto" className="my-3"><span
                className="py-3 w-full mx-6">Contacto</span></Link>
              <Link to="http://pedidos.saentech.com/ogonlineapp/login/" className="my-3"><span
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white text-primary font-bold">Acceso clientes</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
