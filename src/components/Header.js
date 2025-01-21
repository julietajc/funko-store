import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Funko Store</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </header>
  );
}

export default Header;
