import React from "react";
import "../styles/ProductosDestacados.css";

function ProductosDestacados() {
  const productos = [
    {
      id: 1,
      nombre: "Funko Pop Spider-Man",
      imagen: "https://via.placeholder.com/150",
      precio: "$15.00",
    },
    {
      id: 2,
      nombre: "Funko Pop Harry Potter",
      imagen: "https://via.placeholder.com/150",
      precio: "$20.00",
    },
    {
      id: 3,
      nombre: "Funko Pop Pikachu",
      imagen: "https://via.placeholder.com/150",
      precio: "$18.00",
    },
  ];

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
            <p className="productos-destacados__price">{producto.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductosDestacados;
