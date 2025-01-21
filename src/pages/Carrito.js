import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext"; // Asegúrate de importar el contexto correctamente
import "../styles/Carrito.css";

function Carrito() {
  const { carrito, eliminarDelCarrito, modificarCantidad } =
    useContext(CarritoContext);

  // Calcular el total de cada producto
  const calcularTotalProducto = (producto) => {
    return producto.precio * producto.cantidad;
  };

  // Calcular el total general sumando los totales de cada producto
  const calcularTotalGeneral = () => {
    return carrito.reduce(
      (total, producto) => total + calcularTotalProducto(producto),
      0
    );
  };

  // Modificar la cantidad de un producto y eliminarlo si la cantidad es 0
  const modificarCantidadYEliminarSiCero = (id, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      eliminarDelCarrito(id);
    } else {
      modificarCantidad(id, nuevaCantidad);
    }
  };

  return (
    <div className="carrito">
      <h2 className="carrito__titulo">Tu Carrito</h2>
      <div className="carrito__items">
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          carrito.map((producto) => {
            // Solo mostrar productos cuya cantidad sea mayor que 0
            if (producto.cantidad > 0) {
              return (
                <div key={producto.id} className="carrito__item">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="carrito__imagen"
                  />
                  <div className="carrito__info">
                    <h3>{producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                    <p>Total: ${calcularTotalProducto(producto)}</p>
                    <div className="carrito__acciones">
                      <button onClick={() => eliminarDelCarrito(producto.id)}>
                        Eliminar
                      </button>
                      <div className="carrito__cantidad">
                        <button
                          onClick={() =>
                            modificarCantidadYEliminarSiCero(
                              producto.id,
                              producto.cantidad - 1
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={producto.cantidad}
                          onChange={(e) =>
                            modificarCantidadYEliminarSiCero(
                              producto.id,
                              parseInt(e.target.value)
                            )
                          }
                          className="carrito__input-cantidad"
                        />
                        <button
                          onClick={() =>
                            modificarCantidadYEliminarSiCero(
                              producto.id,
                              producto.cantidad + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Si la cantidad es 0, no se renderiza el producto
          })
        )}
      </div>

      {carrito.length > 0 && (
        <div className="carrito__total">
          <h3>Total General: ${calcularTotalGeneral()}</h3>
          <button className="carrito__comprar-btn">Comprar ahora</button>
        </div>
      )}
    </div>
  );
}

export default Carrito;
