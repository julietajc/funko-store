import React from "react";
import "../styles/HistorialCompras.css";

function HistorialCompras({ compras, gestionarDevolucion }) {
  return (
    <div className="historial-compras">
      <h2 className="historial-compras__titulo">Historial de Compras</h2>
      <div className="historial-compras__items">
        {compras.length === 0 ? (
          <p>No has realizado compras aún.</p>
        ) : (
          compras.map((compra) => (
            <div key={compra.id} className="historial-compras__compra">
              <h3>Compra #{compra.id}</h3>
              <ul>
                {compra.productos.map((producto, index) => (
                  <li key={index}>
                    <span>{producto.nombre}</span> - ${producto.precio} x{" "}
                    {producto.cantidad}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => gestionarDevolucion(compra.id)}
                className="historial-compras__boton"
              >
                Gestionar Devolución
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HistorialCompras;
