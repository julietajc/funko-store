import React, { useState } from "react";
import "../styles/Buscador.css";

function Buscador({ onBuscar }) {
  const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
    onBuscar(e.target.value);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        className="buscador__input"
        placeholder="Buscar productos por nombre, categoría o fabricante..."
        value={busqueda}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Buscador;
