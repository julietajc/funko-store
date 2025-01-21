import React from "react";
import "../styles/ResumenCompra.css";

function ResumenCompra({ productos }) {
  const total = productos.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="resumen-compra">
      <h3 className="resumen-compra__titulo">Resumen de la Compra</h3>
      <p className="resumen-compra__total">Total: ${total.toFixed(2)}</p>
      <button className="resumen-compra__boton">Proceder con la compra</button>
    </div>
  );
}

export default ResumenCompra;
