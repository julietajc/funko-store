import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import "../styles/TarjetaProducto.css";

function TarjetaProducto({ producto }) {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto); // Añadir producto al carrito
    navigate("/carrito"); // Redirigir a la página del carrito
  };

  return (
    <div className="tarjeta-producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="tarjeta-producto__imagen"
      />
      <h3 className="tarjeta-producto__nombre">{producto.nombre}</h3>
      <p className="tarjeta-producto__precio">{producto.precio}</p>
      <button
        className="tarjeta-producto__boton"
        onClick={handleAgregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default TarjetaProducto;
