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
    <header className="text-white mb-16">
      <div
        className="header-content hidden xl:flex xl:flex-wrap xl:items-center xl:justify-between xl:justify-around xl:py-2 xl:px-5 xl:px-0">
        <StaticImage
          src="./../../images/logo.png"
          width={63}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
        <div className="hidden md:block">
          <Link to="/"><span className="text-lg mx-6">
        Inicio
          </span></Link>
          <span className="text-lg mx-6">
        Conocenos
      </span>
          <span className="text-lg mx-6">
        Proveedores
      </span>
          <Link to="/saentech-pro">
          <span className="text-lg mx-6">
        Saentech Pro
      </span>
          </Link>
          <span className="text-lg mx-6">
        Contacto
      </span>
        </div>
        <div className="hidden md:flex items-center">
        <span className="text-secondary text-lg mx-2">
        +00 123 456 789
        </span>
          <div className="bg-primary rounded-full py-1 px-4 mx-2 text-black">
            Contáctanos
          </div>
          <div className="bg-transparent border-2 border-solid border-primary rounded-full py-1 px-4 mx-2">
            Acceso Clientes
          </div>
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
        className="header-content xl:hidden flex items-center justify-between py-4 px-5 fixed top-1 left-1">
        <StaticImage
          src="./../../images/logo.png"
          width={63}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
        <div className="hamburger-menu menu z-20" onClick={menuFunction}>
          <div className="bar" />
        </div>
        <div className={"bg-white flex flex-col hide-menu menu-content z-10 js-menu-content"}>
          <a href="#" className="close close-js" onClick={closeMenu} />
          <div className="w-full text-black flex flex flex-col text-center items-center text-2xl mt-20">
            <Link to="/" className="my-3"><span className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Inicio</span></Link>
            <Link to="/" className="my-3"><span
              className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Conocenos</span></Link>
            <Link to="/" className="my-3"><span
              className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Proveedores</span></Link>
            <Link to="/saentech-pro" className="my-3"><span className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Saentech Pro</span></Link>
            <Link to="/" className="my-3"><span
              className="py-3 w-full mx-6 hover:bg-primary hover:text-white">Contacto</span></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
