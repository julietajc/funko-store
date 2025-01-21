import React, { useState } from "react";
import "../styles/ListaCarrito.css";

function ListaCarrito({ productos, eliminarProducto, modificarCantidad }) {
  return (
    <div className="lista-carrito">
      <h2 className="lista-carrito__titulo">Tu Carrito</h2>
      <div className="lista-carrito__items">
        {productos.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="lista-carrito__item">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="lista-carrito__imagen"
              />
              <div className="lista-carrito__info">
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <div className="lista-carrito__acciones">
                  <button onClick={() => eliminarProducto(producto.id)}>
                    Eliminar
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={producto.cantidad}
                    onChange={(e) =>
                      modificarCantidad(producto.id, e.target.value)
                    }
                    className="lista-carrito__cantidad"
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListaCarrito;
