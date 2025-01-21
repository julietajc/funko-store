import React from "react";
import "../styles/TarjetaProducto.css";

function TarjetaProducto({ producto }) {
  return (
    <div className="tarjeta-producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="tarjeta-producto__imagen"
      />
      <h3 className="tarjeta-producto__nombre">{producto.nombre}</h3>
      <p className="tarjeta-producto__precio">{producto.precio}</p>
      <button className="tarjeta-producto__boton">Añadir al carrito</button>
    </div>
  );
}

export default TarjetaProducto;
