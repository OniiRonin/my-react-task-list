import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";

const Menu = () => {
  return (
    <header className="menu">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/tareas" className="menu-link">
              Tareas
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/sobre-nosotros" className="menu-link">
              Sobre Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
