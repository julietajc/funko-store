import React from "react";
import "../styles/ProductosDestacados.css";
import productosData from "../data/productos.json";

function ProductosDestacados() {
  const productos = productosData.slice(0, 4);

  return (
    <section className="productos-destacados">
      <h2 className="productos-destacados__title">Productos Destacados</h2>
      <div className="productos-destacados__grid">
        {productos.map((producto) => (
          <div key={producto.id} className="productos-destacados__item">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="productos-destacados__image"
            />
            <h3 className="productos-destacados__name">{producto.nombre}</h3>
            <p className="productos-destacados__price">
              ${producto.precio.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosDestacados;
