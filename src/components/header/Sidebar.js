import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.css";

function Sidebar(props) {
  return (
    <Menu {...props}>
      <span className="menu-item">
        Inicio
      </span>
      <span className="menu-item">
        Conocenos
      </span>
      <span className="menu-item">
        Proveedores
      </span>
      <span className="menu-item">
        Saentech Pro
      </span>
      <span className="menu-item">
        Contacto
      </span>
    </Menu>
  );
}

export default Sidebar

