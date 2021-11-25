import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="header-content text-white flex items-center justify-between md:justify-around py-2 px-5 md:px-0">
      <Link to="/">
        <StaticImage
          src="../images/logo.png"
          width={63}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
      </Link>
      <div className="hidden md:block">
        <span className="text-lg mx-6">
        Inicio
      </span>
        <span className="text-lg mx-6">
        Conocenos
      </span>
        <span className="text-lg mx-6">
        Proveedores
      </span>
        <span className="text-lg mx-6">
        Saentech Pro
      </span>
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
          src="../images/menu.png"
          width={63}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A logo"
        />
      </div>
    </div>
  </header>
)

export default Header
