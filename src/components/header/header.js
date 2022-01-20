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
    <header className="text-white mb-16 flex flex-col">
      <div className={"mt-2 rounded-lg self-center hidden xl:block border-primary border"}>
         <span className=" text-primary text-lg mx-2">
          Horario de L-J: 08:30 - 18:00 V: 08:30 - 15:00
        </span>
      </div>
      <div
        className="hidden xl:flex xl:flex-wrap xl:items-center xl:justify-between xl:justify-around xl:py-2 xl:px-5 xl:px-0">
        <Link to={"/"}>
          <StaticImage
            src="./../../images/logo.png"
            width={63}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A logo"
          />
        </Link>

        <div className="hidden md:block">
          <Link to="/"><span className="text-lg mx-6">
        Inicio
          </span></Link>
          <Link to={"#third"}>
          <span className="text-lg mx-6 ">
        Conocenos
      </span>
          </Link>
          <Link to="/catalogo">
          <span className="text-lg mx-6">
        Catalogo
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

          <a href="tel:+34922616266" className="   text-white ">922 616 266</a>

          <Link to={"/contacto"} className="bg-primary rounded-full py-1 px-4 mx-2 text-black">
            Contáctanos
          </Link>
          <Link to={"http://pedidos.saentech.com/ogonlineapp/login/"} target="_blank"
                className="bg-transparent border-2 border-solid border-primary rounded-full py-1 px-4 mx-2">
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
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Inicio</span></Link>
              <Link to="/" className="my-3"><span
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Conocenos</span></Link>
              <Link to="/catalogo" className="my-3"><span
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Catalogos</span></Link>
              <Link to="/saentech-pro" className="my-3"><span
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Saentech Pro</span></Link>
              <Link to="/contacto" className="my-3"><span
                className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Contacto</span></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
